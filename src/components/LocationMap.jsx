const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

function LocationMap({ currentListing }) {
  const { latitude, longitude, neighbourhood } = currentListing;

  const mapSrc =
    latitude && longitude
      ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${latitude},${longitude}&maptype=roadmap&zoom=13`
      : null;

  return (
    <div className="map-iframe">
      <h4>Where you would be</h4>
      {neighbourhood && <p>{neighbourhood}</p>}
      {mapSrc ? (
        <iframe
          title="listing-location"
          width="100%"
          height="400"
          style={{ border: 0 }}
          src={mapSrc}
          allowFullScreen
        />
      ) : (
        <p>Location not available</p>
      )}
    </div>
  );
}

export default LocationMap;
