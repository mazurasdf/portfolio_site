import React from 'react';
import Main from './views/Main';
import Skills from './views/Skills';
import Projects from './views/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/site.css';

function App() {
  return (
    <div className="App">
      <Main />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
