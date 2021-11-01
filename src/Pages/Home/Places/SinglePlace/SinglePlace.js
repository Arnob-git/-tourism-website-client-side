import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinglePlace = (props) => {
    const { name, time, cost, img, _id } = props.place;
    return (
        <div>
            <Card className='mx-2 my-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>{time}</h5>
                        <h5>{cost}</h5>
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                        <Link to={`/book/${_id}`}><Button variant="outline-info">More Information</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePlace;