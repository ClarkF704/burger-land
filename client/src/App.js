import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Error from './components/Error/Error';
function App() {
  return (
    <BrowserRouter>
    <div style={{backgroundColor:'yellow'}}>
    <Navigation/>
    <Switch>
      <Route path="/" component={Landing} exact/>
      <Route path="/about" component={About}/>
      <Route component={Error} />
    </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
