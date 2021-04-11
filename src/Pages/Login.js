import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';


// 로그인 안했을 때, 했을 때에 따라 패널이 다르게 표시된다.
// https://react-bootstrap.netlify.app/components/forms/#forms 참고



const Login = () => {
    return (
        <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    );
};


export default Login;

