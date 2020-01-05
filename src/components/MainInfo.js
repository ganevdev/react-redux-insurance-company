import React, { Component } from 'react';

const styleForInfoCard = {
  margin: 10,
  padding: 10,
};

class MainInfo extends Component {
  render() {
    const { accounting, claimsHistory, policies } = this.props;
    return (
      <div>
        <h2>Main Info:</h2>
        <div
          style={{
            display: 'flex',
          }}
        >
          <h2 style={styleForInfoCard}>accounting: {accounting}</h2>
          <h2 style={styleForInfoCard}>
            amount of claims history: {claimsHistory.length}
          </h2>
          <h2 style={styleForInfoCard}>
            amount of policies: {policies.length}
          </h2>
        </div>
      </div>
    );
  }
}

export default MainInfo;
