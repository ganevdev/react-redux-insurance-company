import React, { Component } from 'react';

class CreatePolicyForm extends Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { createPolicy } = this.props;

    if (createPolicy) createPolicy(this.state);

    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h2>Create Policy Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
            type="text"
            value={name}
          />
          <input type="submit" value="Create New Policy Form" />
        </form>
      </div>
    );
  }
}

export default CreatePolicyForm;
