import React from 'react';
import Navbar22 from "Components/Navbar22";
import LoginButton from "Components/LoginButton";
import ItemCard from "Components/ItemCard";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



import Img1 from 'Tempsrc/Img1.jpg';


const Main = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}> <Navbar22></Navbar22> </Col>
            </Row>
            <Row>
                <Col xs={9}><Image src={Img1} fluid /></Col>
                <Col xs={3}><LoginButton></LoginButton></Col>
            </Row>
            <Row>
                <Col xs={12}><ItemCard></ItemCard></Col>
            </Row>
        </Container>
    );
};

export default Main;




