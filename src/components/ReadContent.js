import React, {Component} from 'react';

class ReadContent extends Component {
    //console.log('App render'); -> 오류 발생
    //render안에만 스크립트 언어가 가능한듯...
    render(){
        console.log('contents render');
        return (
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc}
          </article>  
      );
    }
  }

export default ReadContent