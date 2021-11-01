import React from 'react';
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
    return (
        <div className='py-3 mt-3' style={{ backgroundColor: "#212F3D", color: 'white' }}>
           <div className='text-center'>
               <HashLink to='/home#home' className='text-decoration-none text-White'><h2>Contiki</h2></HashLink>
               <h3>One Of The Best Tourism Services</h3>
           </div>
           <div className='d-flex justify-content-around flex-wrap mt-2'>
               <div className='col-10 col-md-5'>
                   <h5>What and why we do</h5>
                   <p>We bring together travellers from all corners of the globe to discover new cultures and a little part of themselves along the way. Across 350+ global trips we sort out the stressful stuff like transport and accommodation, leaving you with unique travel experiences you wouldn’t be able to book on your own. </p>
               </div>
               <div className='col-10 col-md-5 pt-3'>
                   <h4>Contiki is a famous Tourism service.</h4>
                   <h5>We are here to make your trip better than you Best</h5>
               </div>
           </div>
           <div className='text-center'><small>&copy; Contiki 2021. Arnob UzZaman</small></div>
        </div>
    );
};

export default Footer;