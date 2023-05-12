import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";

function Hero() {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title
              subtitle='WELCOME TO ACADEMIA'
              title='Best Online Education'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              totam aut adipisci, eum sed nihil minus assumenda aliquam soluta,
              ipsa, enim saepe voluptate! Itaque id corrupti culpa inventore
              commodi fugiat.
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
