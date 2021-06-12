import React from 'react';
import { MyContext } from './MyContext';

export default class Comp3 extends React.Component {
    static contextType = MyContext;
    render() {
        const contextValue = this.context;
        return (<div>{contextValue}</div>);
    }
}