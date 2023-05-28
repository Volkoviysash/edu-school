import React from "react";
import { price } from "../../dummydata";
import "./price.css";

function PriceCard() {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow bottom-parrent'>
          <h4>{val.name}</h4>
          <h1>
            <span className='dollar'>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn bottom'>GET STARTED</button>
        </div>
      ))}
    </>
  );
}

export default PriceCard;
