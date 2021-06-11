import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MyComponent = (props) => {
  return (<h1>My Component</h1>);
}

ReactDOM.render(
 <MyComponent/>,
  document.getElementById('root')
);

