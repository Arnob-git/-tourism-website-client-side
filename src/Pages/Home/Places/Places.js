import React, { useEffect, useState } from 'react';
import SinglePlace from './SinglePlace/SinglePlace';

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(()=>{
        fetch('https://secure-scrubland-94121.herokuapp.com/places')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])
    return (
        <div id='tour' className='mt-3 col-12' style={{ backgroundColor: "#EDF8F6" }}>
            <div className='text-center mb-3'><h3>Explore trending destinations. Where will you make memories in 2021?</h3></div>
            <div className="container d-flex flex-wrap justify-content-center">
                {
                    places.map(place => <SinglePlace key={place._id} place={place}></SinglePlace>)
                }
            </div>
        </div>
    );
};

export default Places;