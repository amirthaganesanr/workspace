import React, {Component} from 'react';
import RouterBody from './RouterBody.jsx';
import RouterHeader from './RouterHeader.jsx';

class RouterApp extends Component
{
	render()
	{
	return(<div><RouterHeader/><RouterBody/></div>);
	}
}

export default RouterApp;