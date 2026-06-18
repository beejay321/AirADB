import { useState } from "react";

function UploadImage({ label, value, onChange }) {
  const [imageMode, setImageMode] = useState("url");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const localUrl = URL.createObjectURL(file);
    onChange(localUrl);
  };

  return (
    <div className="image-upload">
      <p className="image-upload-label">{label}</p>
      <div className="image-mode-toggle">
        <button
          type="button"
          className={`toggle-btn ${imageMode === "url" ? "active" : ""}`}
          onClick={() => setImageMode("url")}
        >
          Image URL
        </button>
        <button
          type="button"
          className={`toggle-btn ${imageMode === "upload" ? "active" : ""}`}
          onClick={() => setImageMode("upload")}
        >
          Upload file
        </button>
      </div>

      {imageMode === "url" ? (
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input type="file" accept="image/*" onChange={handleFileChange} />
      )}

      {value && <img src={value} alt="Preview" className="image-preview" />}
    </div>
  );
}
export default UploadImage;
