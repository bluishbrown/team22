import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"


class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };


    render() {
        return (
            <Link to="/Login">
                <Button variant="primary" size="lg" block>
                    Login
                </Button>
            </Link>
        );
    }
}


export default LoginButton;



