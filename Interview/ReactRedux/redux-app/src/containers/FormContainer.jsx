import React from 'react';
import { connect } from "react-redux";
import { addItem } from '../actions';
import { Field, reduxForm, Fields, FormSection } from 'redux-form';

const renderFields = (fields) => (<><input {...fields.firstName.input} type="text" /><input {...fields.lastName.input} type="text"/></>);

    class FormComponent extends React.Component {
        submit = (values) => {
            this.props.addItem(values.input1)
        }
    renderItems = () => (Object.keys(this.props.items).map(index => <li key={index}>{this.props.items[index]}</li>));
    render() {
        return (<form onSubmit={this.props.handleSubmit(this.submit)}>
        <Field component="input" name="input1" />
        <FormSection name = "formGroup"><Field component="input" name="input2" /><Field component="input" name="input3" /></FormSection>
        <Fields names={['firstName', 'lastName']} component={renderFields} />
        <button type="submit">Submit</button>
        {this.renderItems()}
    </form >);
    }
}

const mapStateToProps = state => (
    {items: state.app.items }
    );

const mapDispatchToProps = (dispatch) => ({
        addItem: value => dispatch(addItem(value)),
});

    const FormContainer = reduxForm({
        form: "FirstForm"
})(FormComponent);

    export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);