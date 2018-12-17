import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        }
    }
    render() {
        return (
            <div>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
            <Footer/>
         </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.headerProp}</h1>
         </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
            <h2>{this.props.contentProp}</h2>
         </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (<h2>{this.props.footerProp}</h2>);
    }
}

Footer.defaultProps = {
        footerProp: "Footer from props..."
    }

export default App;