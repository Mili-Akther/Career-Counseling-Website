import React from 'react';
import Page404 from '../../assets/404-page.jpg';
const Error = () => {
    return (
      <div>
        <h3 className='text-red-500 font-bold text-4xl flex items-center justify-center'> Error 404 <br /> Page Not Found</h3>
        <img src={Page404} alt="" className='w-full'/>
      </div>
    );
};

export default Error;