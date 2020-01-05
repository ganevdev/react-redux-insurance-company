import React, { Component } from 'react';

const styleForInfoCard = {
  margin: 10,
  padding: 10,
};

class MainInfo extends Component {
  render() {
    const { accounting, claimsHistory, policies } = this.props;
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <h2 style={styleForInfoCard}>accounting: {accounting}</h2>
        <h2 style={styleForInfoCard}>claims history: {claimsHistory}</h2>
        <h2 style={styleForInfoCard}>policies: {policies}</h2>
      </div>
    );
  }
}

export default MainInfo;
