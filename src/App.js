import React, {useState} from 'react';
import Main from './views/Main';
import Skills from './views/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/site.css';

function App() {
  return (
    <div className="App">
      <Main />
      <Skills />
    </div>
  );
}

export default App;
