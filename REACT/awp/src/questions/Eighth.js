
import React from 'react';
// 1. We define a class component to hold the date in its state.
class Eighth extends React.Component {
  
  // The constructor runs first to set up the initial state
  constructor(props) {
    super(props);
    // The state is a plain JavaScript object
    this.state = { 
      date: new Date() 
    };
  }
  
  // --- Lifecycle Methods ---
  
  // This method runs *after* the component is rendered to the DOM
  componentDidMount() {
    // We start a timer and store its ID on the component
    this.timerID = setInterval(
      () => this.tick(), // It calls the tick() method
      1000 // once per second
    );
  }
  
  // This method runs just *before* the component is removed from the DOM
  componentWillUnmount() {
    // We clear the timer to prevent memory leaks
    clearInterval(this.timerID);
  }
  
  // --- Custom Method ---
  
  // This is our custom method to update the state
  tick() {
    // We use setState() to schedule an update
    // React will re-run render() after this
    this.setState({
      date: new Date()
    });
  }
  
  // --- Render Method ---

  // The render() method describes what the UI should look like
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        {/* We read the date from the state and display it */}
        <h2>It is {this.state.date.toLocaleString()}.</h2>
      </div>
    );
  }
}

export default Eighth;