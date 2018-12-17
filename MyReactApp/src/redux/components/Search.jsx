import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const node = document.getElementById("input1");
        const text = node.value.trim();
        this.props.addOptions(text);
    }

    render() {
        const divStyle = {
            'border-style': 'outset',
            'box-shadow': '5px 5px 5px #d9d9d9',
            'position':'sticky',
            'top':'8px',
            'z-index':'10'
        }
        return (
            <div class="panel panel-default" style={divStyle}>
            <div class="panel-heading">Offer Calculator</div>
        <div class="form-row panel-body">
            <div class="form-group col col-md-3">
                <label for="input1">Input 1:</label>
                <input type="text" class="form-control" id="input1" placeholder="Text 1"/>
            </div>
            <div class="form-group col col-md-3">
                <label for="input2">Input 2:</label>
                <input type="text" class="form-control" id="input2" placeholder="Text 2"/>
            </div>
            <div class="form-group col col-md-3">
                <label for="input3">Input 2:</label>
                <input type="text" class="form-control" id="input3" placeholder="Text 3"/>
            </div>
            <div class="form-group col col-md-3">
                <label for="input4">Input 4:</label>
                <input type="text" class="form-control" id="input4" placeholder="Text 4"/>
            </div>
            <div class="form-group col col-md-3">
                <label for="input5">Input 5:</label>
                <input type="text" class="form-control" id="input5" placeholder="Text 5"/>
            </div>
            <div class="form-group col-md-3">
                <label for="input6">Input 6:</label>
                <input type="text" class="form-control" id="input6" placeholder="Text 6"/>
            </div>
            <div class="form-group col col-md-3">
                <label for="input7">Input 7:</label>
                <input type="text" class="form-control" id="input7" placeholder="Text 7"/>
            </div>
            <div class="col-md-offset-1 col-md-1">
        <br/>
        <input type="button" class="form-control btn btn-sm btn-primary" id="input8" value="Submit" onClick={this.handleClick} />
        </div>
        </div>
        </div>
        );
    }
}

export default Search;