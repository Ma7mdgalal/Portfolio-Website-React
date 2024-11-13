import React from 'react'
import { Heading } from '../common/Heading'
import { blog } from '../data/Dummydata';

export const Blog = () => {
  return (
    <>
    <section className='blog'>
        <div className="container">
            <Heading title='Blog'/>
            <div className="content grid3">
            {
                blog.map((item)=>(
                   <div className="box" data-aos="filp-left">
                    <div className="img" data-aos="filp-up"><img src={item.cover} alt="" data-aos="filp-down"/></div>
                    <div className="text">
                        <h3 data-aos="filp-right">{item.title}</h3>
                        <label data-aos="filp-left"> By {item.author} {item.date}</label>
                        <p data-aos="filp-up-right">{item.desc}</p>
                    </div>
                   </div>
                ))
            }
            </div>
        </div>
    </section>
    </>
  )
}
