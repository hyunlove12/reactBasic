import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//./App -> 파일의 이름
//사용자 정의 태그 컴포넌트
import Appdd from './App';
import * as serviceWorker from './serviceWorker';

//APP -> 컴포넌트
//import App from './App'; APP.js 생략
//사용자 정의 태그 App.js안에 실행
//App.js 실행
ReactDOM.render(<Appdd />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
