function ListingsCard({ property }) {
  return (
    <>
      <div className="listing-card">
        <img src={property.picture_url} alt="" className="listing-img" />
        <h6>{property.name}</h6>
        <p>{property.neighborhood}</p>
        <p>{property.price} per night</p>
        {/* <div>
          <span className="heart">❤️</span>
        </div> */}
      </div>
    </>
  );
}

export default ListingsCard;
