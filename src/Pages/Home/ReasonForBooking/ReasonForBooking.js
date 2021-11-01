import React from 'react';
import { Card } from 'react-bootstrap';

const ReasonForBooking = () => {
    return (
        <div className="py-2">
            <div className="mb-2 text-center">
                <h3>Why book with Contiki</h3>
            </div>
            <div className='container mt-3 d-flex flex-wrap justify-content-center'>
                <Card className='col-md-3 col-7 mx-3 border border-2 mb-3' style={{ backgroundColor: 'inherit' }}>
                    <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bmmzvvqbm/-/media/240e1fa496c54db68e46d4da9226bc6f.jpg?w=760&hash=73420F203F3A65A23E2A9A139B10128F18BF0B85"} />
                    <Card.Body>
                        <Card.Title>Don’t go it alone, choose Contiki</Card.Title>
                        <Card.Text>We’ve been around for 60+ years, so when you travel with Contiki you can travel with confidence. Our dedicated team of travel experts are with you every step of the way to make sure you have the time of your life.</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='col-md-3 col-7 mx-3 border border-2 mb-3' style={{ backgroundColor: 'inherit' }}>
                    <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bmmzvvqbm/-/media/bcc2c9c5c2f44da4b5723bf03ea08dd1.jpg?w=760&hash=3C9B6ACF903FD42768AD207A55AEF9DB957EC588"} />
                    <Card.Body>
                        <Card.Title>Book & go, stress free</Card.Title>
                        <Card.Text>You focus on the fun and we’ll handle all those stressful travel details. All you need to do is book and go, and we’ll take care of all the transport, accommodations and a bunch of delicious meals for the duration of your trip.</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='col-md-3 col-7 mx-3 border border-2 mb-3' style={{ backgroundColor: 'inherit' }}>
                    <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bmmzvvqbm/-/media/32c8e2028f6d4dd0835479376a1e6245.jpg?w=760&hash=4CF1A8567A953ED4ED48A14FDE154CED16B21F43"} />
                    <Card.Body>
                        <Card.Title>Pay over time interest free</Card.Title>
                        <Card.Text>We make it easy to pay your way. All you need to do is pay a small deposit to lock your place on the trip, then you can pay the rest in as many instalments as you like. Want to pay monthly instalments? Or in 3 big chunks? It’s completely up to you. All you have to do is pay in full at least 45 days before your trip departs. Easy.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ReasonForBooking;