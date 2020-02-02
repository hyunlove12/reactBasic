import React, {Component} from 'react';

class Control extends Component {
    //클래스 안에 소속되는 함수는 function 생략
    //하나의 최상위 태그만 사용해야 된다.
    render(){
      console.log('subject render')
      return (
        <ul>
          <li><a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input type="button" value="delete" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('delete');
          }.bind(this)}/></li>
      </ul>
      );
    }
  }
export default Control;  