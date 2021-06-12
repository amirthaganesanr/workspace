import React from 'react';
import ReactDOM from 'react-dom';


const RefDisplay = React.forwardRef((props, ref) => (<h1 ref={ref} onClick={props.printRef}>Hello There</h1>))
class MyComponent extends React.Component {
  printRef = (ref) => {
    console.log(ref.current);
  }
  render(){
    const ref = React.createRef();
    return(<RefDisplay ref={ref} printRef={() => this.printRef(ref)}/>);
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

