import React from "react";
import "./footer.css";
import { blog } from "../../../dummydata";

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - you should know all the latest news</h1>
            <span>Don't work hard, work smart</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <div className='legal'>
        <p>Copyright ©2022 All rights reserved by volkovicha</p>
      </div>
    </>
  );
};

export default Footer;
