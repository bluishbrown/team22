import React, { Component } from 'react';
import Navbar22 from "./Components/Navbar22/Navbar22"
import AuthPanel from "./Components/AuthPanel/AuthPanel"
import ItemCard from "./Components/ItemCard/ItemCard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import imga from './Tempsrc/img.jpg'

// import userdata from './Tempsrc/MOCK_DATA.json'

// 메인화면 꾸미기에는 import Image from 'react-bootstrap/Image' 사용
// https://react-bootstrap.netlify.app/components/images/ 참고하자.

// Navbar 같은건 계속 출력시키나.
// app component 내부의 state 에 따라 출력되는 컴포넌트를 다르게 하자.
// ex 상품페이지, 마이페이지 등등등....

// loginstate 가 false 이면 오른쪽에 로그인 창
// 로그인하면 로그인창의 상태가 바뀐다.
// 여러 변수를 한꺼번에 그룹을 만들까? js 에 그런 기능이 있나?

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginState: false
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs={12}> <Navbar22></Navbar22> </Col>
          </Row>
          <Row>
            <Col xs={9}><Image src={imga} fluid /></Col>
            <Col xs={3}><AuthPanel></AuthPanel></Col>
          </Row>
          <Row>
            <Col xs={12}><ItemCard></ItemCard></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;





/*
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
*/