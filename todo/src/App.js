import React from 'react';
import './App.scss';
import ToDo from './components/todo/todo.js';


class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}

export default App;