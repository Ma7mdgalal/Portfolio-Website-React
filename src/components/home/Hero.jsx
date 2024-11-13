import React from 'react';

import {Typewriter} from "react-simple-typewriter";
import { home } from '../data/Dummydata';

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val,i)=>(
            <div className="heroContainer">
                <h3 data-aos="foda-right">{val.text}</h3>
                <h1>
                <Typewriter
            words={[val.name, val.post, val.design]}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
                />
                </h1>
                <p data-aos="zoom-left">{val.desc}</p>
                <button className='primaryBtn' data-aos="foda-up-right">Download CV</button>
         </div>
        ))}
      </section>
    </>
  )
}