import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return (<><h1>Header 1</h1><h2>Header 2</h2></>);
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

