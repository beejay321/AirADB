function ListingsCard() {
  return (
    <>
      <div className="listing-card">
        <img
          src="https://dummyimage.com/200x150/ff9/0011ff.png&text=Image+Placeholder"
          alt=""
          className="listing-img"
        />
        <h6>Room in 4th Arrondissement</h6>
        <p>Mar 5-7 </p>
        <p>€192 total</p>
        {/* <div>
          <span className="heart">❤️</span>
        </div> */}
      </div>
    </>
  );
}

export default ListingsCard;
