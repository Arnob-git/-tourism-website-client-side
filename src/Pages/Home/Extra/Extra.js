import React from 'react';
import { Card } from 'react-bootstrap';

const Extra = () => {
    return (
        <div className='py-2 container d-flex justify-content-center flex-wrap'>
            <Card className="col-md-5 col-7 mx-2 border border-0" style={{backgroundColor:'#EDF8F6'}}>
                <div className='col-3 m-auto'>
                    <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bloypn1ra/-/media/682e08bc71b24b81961f27af4850410c.png"} />
                </div>
                <Card.Body>
                    <Card.Title>Your wellbeing is our priority</Card.Title>
                    <Card.Text>
                        See the steps we’ve taken to prioritise your health so you can travel with confidence.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-md-5 col-7 mx-2 border border-0" style={{backgroundColor:'#FFF8EC'}}>
                <div className='col-3 m-auto'>
                    <Card.Img variant="top" src={"https://www.contiki.com/v-ch1bm2jfc3ew/-/media/5ca7a99a15c744d684c786061ffa4674.png"} />
                </div>
                <Card.Body>
                    <Card.Title>Don’t take our word for it</Card.Title>
                    <Card.Text>
                        The independent review platform Feefo has collected over 13,000 reviews directly from our travellers, with an average rating of 4.6/5.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Extra;