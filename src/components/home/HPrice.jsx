import React from "react";
import Title from "../common/title/Title";
import PriceCard from "../pricing/PriceCard";

export const HPrice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Title subtitle='our pricing' title='pricing & packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  );
};
