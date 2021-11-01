import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    const HandleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUri);
        })
        .finally(()=> setIsLoading(false));
    }
    return (
        <div className='text-center mt-3 py-5' style={{height:'70vh'}}>
            <h1>HEY THERE</h1>
            <h4>This site has been created specifically for you, our favourite tourist.</h4>
            <h5>You focus on the fun and we’ll handle all those stressful travel details. All you need to do is book and go, and we’ll take care of all the transport, accommodations for the duration of your trip.</h5>
            <h2>Please Sign In</h2>
            <Button className='mt-3 fs-4' onClick={HandleSignIn} variant="warning">Sign In With Google</Button>
        </div>
    );
};

export default Login;