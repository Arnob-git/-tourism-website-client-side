import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slide = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-01-1024x683.jpg"
                        alt="Nomand Paradise"
                    />
                    <Carousel.Caption>
                        <h3>Nomand Paradise</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media-eng.dhakatribune.com/uploads/2018/08/bandarban-r-1533379196498.jpg"
                        alt="Dhaka Tribune"
                    />
                    <Carousel.Caption>
                        <h3>Dhaka Tribune</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Somapura-Mahavihara.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>The Crazy Tourists</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slide;