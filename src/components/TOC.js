import React, {Component} from 'react';

class TOC extends Component {
    //본 컴포넌트가 실행될지 말지를 결정하는 함수
    //return false일 경우 호출되지 않는다.
    //newProps, newState -> props, state 가 바뀌었을 때 값
    shouldComponentUpdate(newProps, newState){        
        //newProps : 새로운 값
        //this.props.data : 기존 값
        console.log("===TOC render should",newProps,this.props.data);
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render() {
        console.log('toc render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            //리액트 내부에서는 key값 필요(리액트 내부에서 사용하는 것)
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/"+data[i].id}
                       data-id={data[i].id}
                       onClick={function(e){    
                        e.preventDefault();
                        console.log(e.target.dataset.id)
                        this.props.onChagePage(e.target.dataset.id);     
                       }.bind(this)} 
                    >{data[i].title}</a>
                </li>)
            i = i +1;
        }

        return(
            <nav>
                  <ul>
                      {lists}
                  </ul>
              </nav>   
            );
    }
  }

//많은 클래스 중 외부에서 사용할수 있는 클래스를 지정하는 것
export default TOC;