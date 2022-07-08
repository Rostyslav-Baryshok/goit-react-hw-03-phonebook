import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, InputEl } from './ContactForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hadleSubmit = (values, { resetForm }) => {
    const newName = {
      name: values.name,
      number: values.number,
    };
    this.props.onSubmit(newName);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.hadleSubmit}
      >
        {props => (
          <Form>
            <Label>
              <InputEl>Name</InputEl>
              <Field
                type="text"
                name="name"
                onChange={props.handleChange}
                value={props.values.name}
              />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <InputEl>Number</InputEl>
              <Field
                type="tel"
                name="number"
                onChange={props.handleChange}
                value={props.values.number}
              />
              <ErrorMessage name="number" component="div" />
            </Label>
            <Button type="submit">Add contact</Button>
          </Form>
        )}
      </Formik>
    );
  }
}
