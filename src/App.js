import React from 'react';
import {Component} from 'react';
import './App.css';
import TOC from "./components/TOC"
import ReadContent from './components/ReadContent'
import Subject from './components/Subject'
import Control from './components/Control'
import CreateContent from './components/CreateContent'

//유사 자바스크립트 -> jsx 페이스북에서 만든 언어
class App extends Component {
  constructor(props){
    super(props);
    //state 값 초기화
    //외부에 노출될 필요가 없는 값은 숨기는 것
    //state는 내부에서 사용하는 값
    //state가 변경되면 render함수가 다시 호출
    //render는 어떠한 html을 그릴것이가를 결정하는 함수
    //i = i = 1 이란 문법도 작용 -> 무한루프
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:'web@@', sub:'world Wide Web@@'},
      welcome:{title:'welcome', desc:'Hello, React'},
      contents:[
          {id:1, title:'HTML', desc:'HTML is HyperText ...'}
        , {id:2, title:'CSS', desc:'CSS is for design ...'}
        , {id:3, title:'javaScript', desc:'JAVASCRIPT is HyperText ...'}
      ]
    }
  }
  render() {
    console.log('App render');
    console.log('selected_content_id'+ this.state.selected_content_id);
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
        var i = 0;
        while(i < this.state.contents.length){
          console.log('this.state.contents.length' + this.state.contents.length);
          console.log('2');
          var data = this.state.contents[i];
          if(data.id === this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i = i + 1;
        }
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
        _article = <CreateContent onSubmit={function(_title, _desc){
          this.max_content_id = this.max_content_id + 1;
          //state값을 직접 수정함녀 리액트가 모른다 setState사용
          //push는 기존의 값을 수정하고  concat은 새로운 객체를 생성 -> concat이 성능이 더 좋다.
          //this.state.contents.push로 하게 될경우 새로운값과 기존의 값이 항상 같아지기 때문에
          //shouldComponentUpdate를 사용할 수 없다.
          //쓸데없는 컴포넌트가 다시 렌더된다. -> 리액트의 장점을 상쇄시키는 것
          //this.state.contents.push(
           // {id:this.max_content_id, title:_title, desc: _desc}
          //)
          
          //push를 사용할 경우 배열을 복사해서 사용
          //var newContents = Array.from(this.state.contents);
          //newContents.push(
          //  {id:this.max_content_id, title:_title, desc: _desc}
          //);

          //객체 복사
          //기존의 객체에 a 추가
          //Object.assign({left:1, right:2}, a);


          var _contents = this.state.contents.concat(
             {id:this.max_content_id, title:_title, desc: _desc}
           )
          this.setState({
             contents : _contents
          })
          console.log(_title);
          console.log(_desc);
        }.bind(this)}></CreateContent>
    }
    //render가 소속된 함수 자체를 의미
    console.log('render', this);
    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
                 sub={this.state.subject.sub}
                 onChangePage = {function(){
                            this.setState({mode:'welcome'});
                  }.bind(this)}></Subject>
        <Subject title="React" sub="For UI"></Subject>                
        {/*<header>
              <h1>
               
               첫번째 객체로 event객체를 전달하기로 약속되어있다.
               e.preventDefault() -> 이벤트가 발생한 태그의 동작을 막는 것 -> a 태그의 동작(페이지 이동)이 막아진다.
               
                <a href="/" onClick={function(e){
                  console.log('event in', this);
                  e.preventDefault();
                  return;
                   console.log(e);
                   e.preventDefault();
                   //this가 아무것도 가르키지 않는다. bind(this) -> this에 값 할당
                   //setState -> state값 변경 함수
                   this.state.mode = 'welcome'
                   this.setState({
                     mode:'welcome'
                   })
                }.bind(this)}>{this.state.subject.title}</a>
              </h1>
              {this.state.subject.sub}
        </header>  */}
        //data라는 props로 전달 
        <TOC data={this.state.contents}
             onChagePage={function(id){
               console.log('id',id);
                this.setState({
                  mode:'read',
                  selected_content_id:id
              });
             }.bind(this)}
        ></TOC>
        <Control onChangeMode={function(mode){
            this.setState({mode:mode})
        }.bind(this)}></Control>
       {_article}
      </div>
    );
  }
}
export default App;
