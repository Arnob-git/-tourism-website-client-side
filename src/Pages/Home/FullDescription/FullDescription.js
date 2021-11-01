import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const FullDescription = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const descriptionUri = `https://secure-scrubland-94121.herokuapp.com/places/${id}`;
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(descriptionUri)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const { name, img, cost, time, description } = details;
    const history = useHistory();
    const handleBook = () => {
        fetch('https://secure-scrubland-94121.herokuapp.com/booked', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successfully user');
                }
            })
            .catch(err => {
                const proceed = window.confirm('You already booked this plan.. Check ooking management?');
                if (proceed) {
                    history.push('/booking');
                }
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div>
                    <h2>{name}</h2>
                    <div className='col-8 m-auto'>
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                    <h6>Cost: {cost}</h6>
                    <h5>Will be started in: {time}</h5>
                    <h2>Book now:</h2>
                    {
                        user?.email ? <button onClick={handleBook} className='btn btn-danger'>Book Now</button> :
                            <Link to='/login'><Button variant="warning">Please login before booking</Button></Link>
                    }
                    <h6>Description: {description}</h6>
                </div>
            </div>
        </div>
    );
};

export default FullDescription;