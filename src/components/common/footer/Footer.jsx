import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container mt-40 px-6 py-10 sm:px-20 md:px-24 lg:px-16 xl:px-20'>
      <div className='py-10 lg:grid lg:grid-cols-3 lg:items-center xl:flex xl:justify-between '>
        <div>
          <h1 className='text-3xl font-semibold lg:text-4xl lg:grid-cols-1' style={{ color: '#9A8873' }}>Aaha Felt</h1>
        </div>
        <div className='relative box-border w-full xl:w-1/2 lg:w-3/4 my-10 lg:grid-cols-2'>
          <input className='border-gray-100 outline-none relative w-full rounded-full pl-4 py-3 px-4' type="email" placeholder='Your Email' />
          <button className='subscribe duration-500 text-white absolute py-3 right-0 top-0 px-6 rounded-full font-semibold text-md' type="submit">Subscribe Now</button>
        </div>
        <ul className='flex justify-end'>
          <li className='mx-1'><i className='fab fa-twitter py-3 px-3 social rounded-full border border-orange-400'></i></li>
          <li className='mx-1'><i className='fab fa-facebook-f py-3 px-4 social rounded-full border border-orange-400'></i></li>
          <li className='mx-1'><i className='fab fa-youtube py-3 px-3 social rounded-full border border-orange-400'></i></li>
          <li className='mx-1'><i className='fab fa-linkedin-in py-3 px-3 social rounded-full border border-orange-400'></i></li>
        </ul>
      </div>
      <hr className='w-10/12 lg:w-full m-auto h-0.5 mb-6' />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-8 lg:grid-cols-4'>
        <div className='shop-info'>
          <h3 className='footer-head lg:w-40 xl:w-auto'>Why People Like Us!</h3>
          <p className='footer-contact mt-4 md:w-60 lg:w-44 xl:w-56'>
            Our felt products are handcrafted from 100% natural wool, sourced ethically and made with care. Each piece is unique, adding warmth and elegance to any space.
          </p>
          <button className='read duration-500 relative py-2 mt-6 right-0 top-0 px-6 border border-orange-400 rounded-full font-semibold text-md' type="submit">Read More</button>
        </div>
        <div className='shop-info'>
          <h3 className='footer-head'>Shop Info</h3>
          <ul className='mt-5'>
            <li className='footer-body'>About Us</li>
            <li className='footer-body'>Contact Us</li>
            <li className='footer-body'>Privacy Policy</li>
            <li className='footer-body'>Terms & Condition</li>
          </ul>
        </div>
        <div>
        <div className='contact-section'>
          <h3 className='footer-head'>Contact</h3>
          <div className='mt-5'>
            <p className='footer-contact'>Address: Tokha 44600, Nepal</p>
            <p className='footer-contact'>Email: aahafelt@gmail.com</p>
            <p className='footer-contact'>Phone: +977 9851043414</p>
            <p className='footer-contact'>Payment Accepted</p>
            <img className='mt-4' src="../img/payment.png" alt="" />

          </div>
          </div>
        </div>
        <div>
          <h3 className='footer-head'>Location</h3>
          <div className='mt-5'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14123.81109662184!2d85.3214008!3d27.7496026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190882e73a45%3A0x49e655f5009b4fef!2sAAHA%20FELT%20UDHYOG!5e0!3m2!1sen!2sin!4v1721568609652!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr className=' my-6' />
      <div className='m-auto text-center'>
        <p className='font-medium' style={{ color: '#ffffff80' }}><strong style={{ color: '#EAD0B3' }}>&copy;Aaha Felt PVT.LTD, </strong>All Right Reserved by Rujin Devkota</p>
      </div>
    </div>
  );
}

export default Footer;
