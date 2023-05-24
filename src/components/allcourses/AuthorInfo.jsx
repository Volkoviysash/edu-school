import React from "react";

function AuthorInfo({ details }) {
  return (
    <>
      <div className='box'>
        <div className='dimg'>
          <img src={details.dcover} alt='' />
        </div>
        <div className='para'>
          <h4>{details.name}</h4>
        </div>
      </div>
      <span>{details.totalTime}</span>
    </>
  );
}
export default AuthorInfo;
