import React from 'react';
import user from '../../assets/user 1.png'
import reports from '../../assets/report 1.png'
const Card = ({players}) => {
  const {image, name, country, role, rating, batingStyle, bowlingStyle, price} = players
  return (
  <div className='grid justify-center border rounded-xl py-4 bg-yellow-100 text-black mt-8 text-[17px] space-y-2'>
      <img className='w-80 h-50 rounded' src={image} alt="" />
      <div className='flex mt-2 gap-2'>
        <img src={user} alt="" />
        <h3 className='font-bold text-5'>{name}</h3>
      </div>
      <div className='flex justify-between items-center border-b pb-2'>
      <div className='flex mt-2 gap-2'>
        <img src={reports} alt="" />
        <h3 className='font-bold text-5'>{country}</h3>
      </div>
      <p className='bg-gray-500 px-1 py-1 rounded'>{role}</p>
      </div>
      <span className='flex justify-between items-center'>
        <p className='font-bold'>Rating:</p>
        <p>{rating}</p>
      </span>
      <div className='flex justify-between items-center'>
      <p>{batingStyle}</p>
      <p>{bowlingStyle}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p>Price: {price}</p>
        <button>Choose Selected</button>
      </div>
    </div>
  );
};

export default Card;