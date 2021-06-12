import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent1 extends React.Component {
  render() {
    const element = document.getElementById('myPortal');
    return ReactDOM.createPortal((<h1>Portal</h1>), element);
  }
}
class MyComponent extends React.Component {
  render() {
    return (
      <div className="Parent">
        <h1>Test</h1>
        <MyComponent1 />
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

