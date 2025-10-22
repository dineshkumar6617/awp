//LifeCycle Methods in ReactJS
import React from "react";

class Eleventh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constructor: Component is being created");
  }

  // 1️⃣ Mounting phase
  componentDidMount() {
    console.log("componentDidMount: Component mounted to DOM");
  }

  // 2️⃣ Updating phase
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component updated");
    console.log("Previous count:", prevState.count, "Current count:", this.state.count);
  }

  // 3️⃣ Unmounting phase
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be removed from DOM");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render: Component rendering");
    return (
      <div>
        <h1>React Lifecycle Methods Demo</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    );
  }
}

export default Eleventh;
