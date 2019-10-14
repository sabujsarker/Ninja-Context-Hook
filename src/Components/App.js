import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Ssc from './pages/Ssc'
import Jsc from './pages/Jsc'
import Hsc from './pages/Hsc'
import Honers from './pages/Honers'
import NavBar from './Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1 className="font-weight-light py-5">GPA Calculation</h1>
      <NavBar/>
      <Route exact path= '/' component={Jsc} />
      <Route path= '/jsc' component={Jsc} />
      <Route path= '/ssc' component={Ssc} />
      <Route path= '/hsc' component={Hsc} />
      <Route path= '/honers' component={Honers} />
    </div>
    </BrowserRouter>
  );
}

export default App;