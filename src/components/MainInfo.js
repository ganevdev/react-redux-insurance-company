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
    <div style={{ marginTop: '40px' }}>
      <h2>Main Info:</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h4 style={styleForInfoCard}>accounting: {accounting}</h4>
        </div>
        <div>
          <h4 style={styleForInfoCard}>
            amount of claims history: {claimsHistory.length}
          </h4>
          <div>
            {claimsHistory.map((p) => (
              <p>
                {p.name} {p.amountOfMoneyToCollect}$
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 style={styleForInfoCard}>
            amount of policies: {policies.length}
          </h4>
          <div>
            {policies.map((p) => (
              <p>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
