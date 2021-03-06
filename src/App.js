import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main, NotFound, Login } from './Pages/Index';


// 메인화면 꾸미기에는 import Image from 'react-bootstrap/Image' 사용
// https://react-bootstrap.netlify.app/components/images/ 참고하자.

// Navbar 같은건 계속 출력시키나.
// app component 내부의 state 에 따라 출력되는 컴포넌트를 다르게 하자.
// ex 상품페이지, 마이페이지 등등등....

// loginstate 가 false 이면 오른쪽에 로그인 창
// 로그인하면 로그인창의 상태가 바뀐다.
// 여러 변수를 한꺼번에 그룹을 만들까? js 에 그런 기능이 있나?

// Switch 태그는 app 내에서 단 하나의 라우트만을 렌더링 시켜주는 역할을 한다.
// main 이외에 상점페이지 등등 다른 것들을 추가해보자
// EX) <Route exact Path="/shoppage" component={Shop} />


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>

          <Route exact path="/" component={Main} />

          <Route path="/Login" component={Login} />

          <Route path="*" component={NotFound} />

        </Switch>
      </div>
    );
  }
}


export default App;