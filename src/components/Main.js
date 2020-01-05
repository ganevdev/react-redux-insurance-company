import React, { Component } from 'react';

class Main extends Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <main className="Counter">
        <h1 className="count">{count}</h1>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

export default Main;
