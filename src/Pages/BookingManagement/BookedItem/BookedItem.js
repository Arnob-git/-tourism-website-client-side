import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BookedItem = (props) => {

    const { name, cost, img, _id } = props.bookedPlace;

    return (
        <div>
            <Card className='m-auto my-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Cost: {cost}</Card.Text>
                    <Button onClick={() => props.handleDelete(_id)} variant="outline-danger">Remove this plan</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookedItem;