function DriverCard(props) {

  return (
    <div className="Content">
      <div className="cardBlue">
        <img id="imageC" src={props.img} alt="" />
        <h3>{props.name}</h3>
        {parseInt(props.rating) === 1 ? (
          <p>&#10022; &#10023; &#10023; &#10023; &#10023;</p>
        ) : parseInt(props.rating) === 2 ? (
          <p> &#10022; &#10022; &#10023; &#10023; &#10023;</p>
        ) : parseInt(props.rating) === 3 ? (
          <p> &#10022; &#10022; &#10022; &#10023; &#10023;</p>
        ) : parseInt(props.rating) === 4 ? (
          <p> &#10022; &#10022; &#10022; &#10022; &#10023;</p>
        ) : (
          <p> &#10022; &#10022; &#10022; &#10022; &#10022;</p>
        )}
        <p>{props.car.model}</p>
        <p>{props.car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
