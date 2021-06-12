import React from 'react';
import Comp2 from './Comp2';
import { MyContext } from './MyContext';

export default class MyComponent extends React.Component {
    render() {
        return (<MyContext.Provider value='new'>
            <Comp2 />
        </MyContext.Provider>);
    }
}