import React, { useEffect, useState } from 'react';
import BookedItem from './BookedItem/BookedItem';

const BookingManagement = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://secure-scrubland-94121.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://secure-scrubland-94121.herokuapp.com/booked/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Succesfully Removed')
                        const remainingItems = items.filter(item => item._id !== id);
                        setItems(remainingItems);
                    }
                })
        }
    }

    return (
        <div>
            {
                items.length < 1? <div className="container text-center mt-5" style={{height:"70vh"}}>
                    <h1>You didn't anything book yet..</h1>
                </div>:
                items.map(bookedPlace => <BookedItem key={bookedPlace._id} items={items} handleDelete={handleDelete} bookedPlace={bookedPlace}></BookedItem>)
            }
        </div>
    );
};

export default BookingManagement;