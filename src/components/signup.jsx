import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

const FIELDS = {
  email: "email",
  password: "password",
  secondPassword: "secondPassword"
};

class Signup extends Component {
  handleSubmit = formValues => {};

  renderInputComponent = field => {
    return (
      <div className="row justify-content-md-center">
        <fieldset className="col-md-4 form-group">
          <label className="bmd-label-floating">{field.label}</label>
          <input {...field.input} type={field.type} className="form-control" />
        </fieldset>
      </div>
    );
  };

  render() {
    const {
      handleSubmit,
      fields: {}
    } = this.props;
    return (
      <form
        style={{ margin: 50 }}
        className="body_content"
        onSubmit={handleSubmit(this.handleSubmit)}
      >
        <div className="row justify-content-md-center">
          <h1>Inscription</h1>
        </div>
        <Field
          name={FIELDS.email}
          component={this.renderInputComponent}
          type="text"
          label="email"
        />
        <Field
          name={FIELDS.password}
          component={this.renderInputComponent}
          type="password"
          label="Mot de passe"
        />
        <Field
          name={FIELDS.secondPassword}
          component={this.renderInputComponent}
          type="password"
          label="Mot de passe (répétez)"
        />
        <div className="row justify-content-md-center">
          <button type="submit" className="btn btn-primary btn-raised">
            Inscription
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

function validate(formProps) {
  const errors = {};
  return errors;
}

const signupForm = reduxForm({
  form: "SignupForm",
  fields: Object.keys(FIELDS),
  validate
})(Signup);

export default connect(
  mapStateToProps,
  actions
)(signupForm);
