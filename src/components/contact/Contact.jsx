import React from "react";
import "./contact.css";
import Back from "../common/back/Back";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5297.484718044528!2d35.0435772!3d48.4038907!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1684354114297!5m2!1sru!2sru";

  return (
    <>
      <Back title='Contact Us' />
      <section className='contact padding'>
        <div className='container shadow flex'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact Us</h1>
            <p>Do you have any questions?</p>
            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS: </h4>
                <p>str. Stefan Cel Mare si Sfant 29</p>
              </div>
              <div className='box'>
                <h4>Email:</h4>
                <p>onlinecourese@mail.md</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+373 690 123 45</p>
              </div>
            </div>
            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='email' placeholder='Subject' />
              <textarea
                cols='30'
                rows='10'
                placeholder='Create a message here...'
              ></textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
