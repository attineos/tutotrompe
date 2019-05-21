import React from 'react';

class App extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return <div>
      <h1>{this.state.counter}</h1>
      <button className="btn btn-primary" onClick={() => {
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        })
      }}>
        Click on me
      </button>
    </div>;
  }
}

export default App;
