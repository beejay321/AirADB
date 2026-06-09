import { Link } from "react-router";

function ListingsCard({ property }) {
  return (
    <>
      <Link to={`/listings/${property.id}`}>
        <div className="listing-card">
          <img src={property.picture_url} alt="" className="listing-img" />
          <h6>{property.name}</h6>
          <p>{property.neighbourhood}</p>
          <p>{property.price} per night</p>
          {/* <div>
          <span className="heart">❤️</span>
          </div> */}
        </div>
      </Link>
    </>
  );
}

export default ListingsCard;
