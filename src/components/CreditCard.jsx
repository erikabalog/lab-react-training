import React from "react";
import VisaCard from "../assets/images/visa.png";

function CreditCard (props) {


return (
    <div className='contente'>
    <div className='styleCard' style={{ background: `${props.bgColor}` }}>
        <div style={{ color: `${props.color}` }}>

          <p>{props.number}</p>
          <p>Expires: {props.expirationMonth} / {props.expirationYear}</p>
          <p>Maxence Bouret</p>
            </div>
        </div>
    </div>
)
}

export default CreditCard;

