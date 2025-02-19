import React from 'react';
import { Link } from 'react-router-dom';
import Vector from '../assets/Vector.png'
import image404 from '../assets/image404.png'

const NotFoundPage = () => {
  return (
    <div className='mt-6 pt-6'>
      <div className="grid grid-cols-1">
       <div className='row-span-1 mx-auto'>
              <img className='object-contain h-25 w-25' src={image404} alt='404' /></div>
              <div className='row-span-1 mx-auto text-gray-500 text-3xl'><b>Oooops......</b></div>
              <div className='row-span-1 mx-auto text-gray-400'>The page you are looking for doesn't seem to exist.</div>
            <div className='row-span-1 mx-auto mt-3'>
            <Link to="/">
              <button className="hover:bg-indigo-700 bg-indigo-500 text-white py-1 px-6 border border-indigo-600 transition-colors duration-300 rounded">
              Go Home
              </button>
            </Link>
            </div>
            </div>
      <img className='max-h-32 max-w-32' src={Vector} />
    </div>
  );
};

export default NotFoundPage;
