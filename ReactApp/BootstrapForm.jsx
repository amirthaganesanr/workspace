    import React, { Component } from 'react';
    import Options from './Options.jsx';
    import Search from './Search.jsx';

    class BootstrapForm extends Component {
        render() {
            return (<div class="container"><Search/><Options/></div>);
        }
    }

    export default BootstrapForm;