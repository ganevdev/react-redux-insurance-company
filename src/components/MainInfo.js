import React from 'react';
import { useSelector } from 'react-redux';

const styleForInfoCard = {
  margin: 10,
  padding: 10,
};

const MainInfo = () => {
  const accounting = useSelector((state) => state.accounting);
  const claimsHistory = useSelector((state) => state.claimsHistory);
  const policies = useSelector((state) => state.policies);
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
        <h2 style={styleForInfoCard}>amount of policies: {policies.length}</h2>
      </div>
    </div>
  );
};

export default MainInfo;
