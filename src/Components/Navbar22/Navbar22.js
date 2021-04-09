import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'


// 로그인 상태 아닌 상태 구분해서 navbar22 항목을 다르게 출력?
// 마이페이지 등등등..

class Navbar22 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Team22 Shopping Mall</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#ProductPg">상품 페이지</Nav.Link>
                        <Nav.Link href="#Text">text</Nav.Link>
                        <NavDropdown title="마이페이지" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">마이페이지</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">장바구니</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">등등등</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">text</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>

                    <Nav>
                        <Nav.Link href="#deets">wwwwww</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            wwwww</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbar22;
