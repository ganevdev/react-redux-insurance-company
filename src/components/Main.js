import React, { Component } from 'react';

class Main extends Component {
  render() {
    const { accounting, claimsHistory, policies } = this.props;
    return (
      <main>
        <div>accounting: {accounting}</div>
        <div>claimsHistory: {claimsHistory}</div>
        <div>policies: {policies}</div>
      </main>
    );
  }
}

export default Main;
