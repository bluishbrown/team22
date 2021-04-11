import React from 'react';
import { useLocation } from "react-router-dom";
import Navbar22 from "Components/Navbar22";


import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NotFound = () => {
  let location = useLocation();

  return (
    <Container>
      <Row>
        <Col xs={12}> <Navbar22></Navbar22> </Col>
      </Row>
      <Row>
        <Jumbotron fluid>
          <Container>
            <h1>Page Not Found</h1>
            <p>
              <code>{location.pathname}</code>
            </p>
          </Container>
        </Jumbotron>
      </Row>
    </Container>


  );
};



export default NotFound;