import React, {Component} from 'react';

class CreateContent extends Component {
    //console.log('App render'); -> 오류 발생
    //render안에만 스크립트 언어가 가능한듯...
    render(){
        console.log('contents render');
        return (
        <article>
              <h2>Create</h2>
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  //리액트를 통해서 페이지 전환 없이 페이지가 바뀌도록
                   e.preventDefault();
                   //debugger;
                   //app.js의 onsubmit이 호출 된다
                   //app.js의 프로퍼티즈를 실행해라
                   this.props.onSubmit(
                     e.target.title.value,
                     e.target.desc.value
                   );
                   alert('submit'); 
                }.bind(this)}
                >
                <p><input type="text" name="title" placeholder="title"/></p>
                <p>
                  <textarea name="desc" placeholder="desc">
                  </textarea>
                </p>
                <p>
                  <input type="submit"/>
                </p>
              </form>
        </article>  
      );
    }
  }

export default CreateContent