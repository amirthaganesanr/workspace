import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOption } from './redux/actions/MyActions.jsx'

import MyOptions from './redux/components/MyOptions.jsx';
import { store } from './redux/stores/MyStore.jsx';
import Search from './redux/components/Search.jsx';

const backgroundStyle = {
    'background-size':'100% 100%',
    'repeat':'none'
};

class App extends Component {
    render() {
        const { dispatch, visibleOptions = [] } = this.props;
        return (
            <div class="container" style={backgroundStyle}><br/><Search addOptions = {text => dispatch(addOption(text))}/><MyOptions options = {visibleOptions}/></div>
        )
    }
}

function select(state) {
    return {
        visibleOptions: state.options
    }
}
export default connect(select)(App);