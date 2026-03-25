import React from 'react';
import heroImg from '../../../assets/banner-main.png'
const Banner = () => {
  return (
    <section className='mt-10'>
      <div
  className="hero min-h-screen max-w-310 mx-auto rounded"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <div className='grid justify-center mb-5'><img src={heroImg} alt="" /></div>
      <h1 className="mb-5 text-3xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="mb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="btn btn-primary">Claim Free Credit</button>
    </div>
  </div>
</div>
    </section>
  );
};

export default Banner;