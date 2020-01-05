import React, { Component } from 'react';

class CreateClaimForm extends Component {
  state = {
    name: '',
    amountOfMoneyToCollect: 0,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { createClaim } = this.props;

    if (createClaim) {
      createClaim(this.state);
    }

    this.setState({
      name: '',
      amountOfMoneyToCollect: 0,
    });
  };

  render() {
    let { name, amountOfMoneyToCollect } = this.state;

    return (
      <div>
        <h2>Create Claim Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
            type="text"
            value={name}
          />
          <input
            onChange={this.handleChange}
            name="amountOfMoneyToCollect"
            placeholder={0}
            type="number"
            value={amountOfMoneyToCollect}
          />
          <input type="submit" value="Create New Claim Form" />
        </form>
      </div>
    );
  }
}

export default CreateClaimForm;
