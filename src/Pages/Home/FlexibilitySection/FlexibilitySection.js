import React from 'react';
import { Card } from 'react-bootstrap';

const FlexibilitySection = () => {
    return (
        <div className='py-2' style={{ backgroundColor: "#C6BEEE" }}>
            <div className='text-center'>
                <div className='col-md-2 m-auto col-6'>
                    <img src={'https://www.contiki.com/v-ch1blgdn9jbs/-/media/3d305c60bb0247c6887b29303d7997c0.png'} className='img-fluid' alt="" />
                </div>
                <h3>Here’s how we make booking a trip easy, secure and flexible.</h3>
            </div>
            <div className='container mt-3 d-flex flex-wrap justify-content-center align-items-center'>
                <Card className='col-md-2 col-3 mx-3 border border-0' style={{backgroundColor:'inherit'}}>
                <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bfszi1ixe/-/media/8a5b3199adfb4606bb47e3f017b5e005.png"} />
                    <Card.Body>
                    <Card.Text>
                            <h5>Fully Flexible Deposit</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='col-md-2 col-3 mx-3 border border-0' style={{backgroundColor:'inherit'}}>
                <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bft7rxu0m/-/media/29cd5e9368464cb1a06f1bd1e9811ec4.png"} />
                    <Card.Body>
                    <Card.Text>
                            <h5>No amendment fees*</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='col-md-2 col-3 mx-3 border border-0' style={{backgroundColor:'inherit'}}>
                <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bft7rhwys/-/media/123a0633d73a4c7892580879a514158b.png"} />
                    <Card.Body>
                    <Card.Text>
                            <h5>Your money protected*</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='col-md-2 col-3 mx-3 border border-0' style={{backgroundColor:'inherit'}}>
                <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bft7rxu0m/-/media/3c3c91394dc640d1a1b419c5a69c3bba.png"} />
                    <Card.Body>
                    <Card.Text>
                            <h5>24/7 Support</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FlexibilitySection;