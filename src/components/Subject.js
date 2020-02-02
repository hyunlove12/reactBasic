import React, {Component} from 'react';

class Subject extends Component {
    //클래스 안에 소속되는 함수는 function 생략
    //하나의 최상위 태그만 사용해야 된다.
    render(){
      console.log('subject render')
      return (
          <header>
              <h1>
                <a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a>
              </h1>
              {this.props.sub}
          </header>  
      );
    }
  }
export default Subject;  