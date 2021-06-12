import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return (<><h1 onClick={this.props.useHocFn}>Header 1</h1><h2>Header 2</h2></>);
  }
}

const withHOC = WrappedComponent => {
  return class extends React.Component {
    componentDidMount(){
      console.log("IN HOC did mount")
    }
    useHocFn = () => {
      console.log('in hoc fn')
    };

    render() {
      return(<WrappedComponent useHocFn={this.useHocFn} {...this.props}/>)
    }
  }
}

const NewMyComponent = withHOC(MyComponent);

ReactDOM.render(
  <NewMyComponent />,
  document.getElementById('root')
);

