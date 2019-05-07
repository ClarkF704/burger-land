import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
    
    <Navigation/>
    <Switch>
      <Route path="/" component={Landing} exact/>
      <Route path="/about" component={About}/>
      <Route path="/menu" component={Menu}/>
      <Route component={Error} />
    </Switch>

    
    </BrowserRouter>
  );
}

export default App;
