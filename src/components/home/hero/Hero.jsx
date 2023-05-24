import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";

function Hero() {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            {/* <h2 className='main-welcome'>WELCOME TO ACADEMIA</h2>
            <h1 className='main-title'>Best Online Education</h1> */}
            <Title
              subtitle='WELCOME TO ACADEMIA'
              title='Best Online Education'
            />
            <p>
              Unlock Your Potential, Anywhere, Anytime. Experience our
              transformative online education school that empowers learners to
              excel in a digital world.
            </p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
