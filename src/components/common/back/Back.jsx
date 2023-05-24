import React from "react";
import "./back.css";
import { useLocation } from "react-router-dom";

function Back({ title }) {
  const location = useLocation();
  return (
    <>
      <div className='back'>
        <div className='text-box'>
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='margin'></div>
    </>
  );
}

export default Back;
