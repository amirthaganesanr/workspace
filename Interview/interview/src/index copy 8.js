import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    const ref = React.createRef();
    const checkChanges = () => {
      console.log(ref.current.value);
    }
    const updateValue = () => {
      ref.current.value='444';
    }
    return (
      <input type="text" ref={ref} onChange={checkChanges} onBlur={updateValue}/>
    );
  }
}

ReactDOM.render(
  <MyComponent render={data => (<h1>This is from render props: {data}</h1>)} />,
  document.getElementById('root')
);

