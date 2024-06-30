import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom"; 

function Course() {
  return (
    <> 
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-30'>
        <div className='items-center justify-center text-center '>
          <h1 className='text-2xl md:text-4xl  pt-20'>We're delighted to have you {" "}
            <span className='text-blue-800'>Here!</span>
          </h1>
          <p className='mt-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequuntur consequatur porro rerum, minima saepe earum cum, excepturi iure dolorum facilis quasi magnam esse ipsa facere eaque, eum odit quis?
          </p>
          <Link to="/"> 
            <button className='mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))       
          }
        </div>
      </div>
    </>
  );
}

export default Course;