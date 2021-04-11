import React, { Component } from 'react';
import {
    Card,
    CardColumns
} from 'react-bootstrap'


import Img2 from 'Tempsrc/Img2.jpg'
import Img3 from 'Tempsrc/Img3.jpg'
import Img4 from 'Tempsrc/Img4.jpg'
import Img5 from 'Tempsrc/Img5.jpg'
import Img6 from 'Tempsrc/Img6.jpg'
import Img7 from 'Tempsrc/Img7.jpg'
import Img8 from 'Tempsrc/Img8.jpg'
import Img9 from 'Tempsrc/Img9.jpg'
import Img10 from 'Tempsrc/Img10.jpg'



class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={Img2} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img3} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img4} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img5} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img6} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img7} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img8} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img9} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img10} />
                    <Card.Body>
                        <Card.Title>대충 상품이름</Card.Title>
                        <Card.Text>
                            대충 상품설명, 가격
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        );
    }
}

export default ItemCard;