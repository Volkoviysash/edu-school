import React from "react";
import Title from "../common/title/Title";
import { coursesCard } from "../../dummydata";
import OnlineCourses from "../allcourses/OnlineCourses";
import AuthorInfo from "../allcourses/AuthorInfo";

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Title
            subtitle='our courses'
            title='explore our popular online courses'
          />
          <div className='coursesCard '>
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => {
                return (
                  <div className='items bottom-parrent'>
                    <div className='content flex'>
                      <div className='left'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                      </div>
                      <div className='text'>
                        <h1>{val.coursesName}</h1>
                      </div>
                    </div>
                    <div className='main-rate'>
                      <i class='fa fa-thumbs-up' aria-hidden='true'></i>
                      <h3 className='rating-title'>Current rating:</h3>
                      <div className='icons'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                    </div>
                    <div className='price bottom'>
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                      <button className='outline-btn'>ENROLL NOW !</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <OnlineCourses />
    </>
  );
};

export default HAbout;
