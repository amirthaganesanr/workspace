import React from 'react';
import { connect } from "react-redux";
import { addArticle, getData } from '../actions';



class MyComponent extends React.Component {

    getArticles = () => {
        const { articles } = this.props;
        return Object.keys(articles).map(key => <li key={key}>{articles[key]}</li>);
    }
    render() {
        const articles = this.getArticles();
        return (<>
            <h1 onClick={this.props.onDataClick}>Container 1 loaded</h1>
            <p onClick={this.props.goToForm}>Go to Form</p>
            {articles}</>);
    }
}

const mapStateToProps = state => (
    { articles: state.app.articles }
);

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => { dispatch(addArticle('item from container')) },
    onDataClick: () => dispatch(getData()),
    goToForm: () => { ownProps.history.push('/myForm') },
});

const Container1 = connect(mapStateToProps, mapDispatchToProps)(MyComponent);

export default Container1;