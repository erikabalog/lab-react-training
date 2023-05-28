import React from "react";

function Random(props) {

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      
    return (
        <div className='Content'>
             <div className='contenedor'>
            <h3>Random value between {props.min} and {props.max} == {parseInt(getRandomArbitrary(props.min, props.max))}</h3>
            </div>
      </div>
    );
  }
  
  export default Random;