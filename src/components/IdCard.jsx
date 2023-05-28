import React from "react";

const IdCard = (props) => {
  const birthDate = new Date(props.birth);

  return (
    <div className="IdCard">
      <img src={props.picture} alt="Profile" className="IdCard__picture" />
      <div className="IdCard__details">
        <p className="IdCard__name">
          {props.lastName}, {props.firstName}
        </p>
        <p className="IdCard__gender">Gender: {props.gender}</p>
        <p className="IdCard__height">Height: {props.height} cm</p>
        <p className="IdCard__birth">Date of Birth: {birthDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
