import React, { Component } from 'react';
class App extends Component {
    render() {
        return (
            <div>
         	<Header/>
            <p>Hello World</p>
            <Footer/>
         </div>
        );
    }
}

class Header extends Component{
	render()
	{
	return(<h1>Header</h1>);
	}
}

class Footer extends Component{
	render()
	{
	return(<h1>Footer</h1>);
	}
}
export default App;