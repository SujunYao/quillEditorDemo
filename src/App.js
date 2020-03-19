import React from 'react';
import Quill from 'quill';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    new Quill(document.querySelector('#editor'), {
      theme: 'snow'
    });
  };

  render() {
    return (<div className="App" >
      <header className="App-header">
        <div id='editor'></div>
      </header>
    </div>);
  }
}

export default App;
