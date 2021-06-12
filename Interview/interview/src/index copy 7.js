import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    const renderElement = this.props.render('passed from component');
    return (
      <div className="Parent">
        {renderElement}
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent render={data => (<h1>This is from render props: {data}</h1>)} />,
  document.getElementById('root')
);

