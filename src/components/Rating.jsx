// import React from "react";

function Rating (props) {

    const children = "";

    if (Rating > 0) {
        (props.children) = <div><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
    } else if(Rating >= 1.49) {
        (props.children) = <div><i className="fa-solid fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
    } else if(Rating >= 1.5) {
        (props.children) = <div><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
    } else if(Rating >= 3) {
        (props.children) = <div><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
    } else if (Rating >= 4){
        (props.children) = <div><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="far fa-star"></i></div>;
    } else if (Rating >= 5) {
        (props.children) = <div><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>;
    }


    return(children);
}

export default Rating;
