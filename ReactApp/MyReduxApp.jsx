import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOption } from './actions/MyActions'

import AddTodo from './components/AddTodo.js';
import MyOptions from './components/MyOptions.jsx';
import BootstrapForm from './BootstrapForm.jsx';
import { store } from './stores/MyStore.js';
import Search from './Search.jsx';

const backgroundStyle = {
    'background-image': 'url("background.jpeg")',
    'background-size':'100% 100%',
    'repeat':'none'
};

class App extends Component {
    render() {
        const { dispatch, visibleOptions = [] } = this.props;
        return (
            <div class="container-fluid" style={backgroundStyle}><br/><Search addOptions = {text => dispatch(addOption(text))}/><MyOptions options = {visibleOptions}/></div>
        )
    }
}

function select(state) {
    return {
        visibleOptions: state.options
    }
}
export default connect(select)(App);