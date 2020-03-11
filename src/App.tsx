import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'mobx-react';
import rootStore from './store'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <Provider rootStore={rootStore}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          犹豫就会白给
        </div>
        <div>
        </div>
        <Router>
          <Link to="/counter">基于MobX计数器</Link>
          <Switch>
            <Route path="/counter" exact={true} component={Counter}/>
          </Switch>
        </Router>
      </header>
    </div>
    </Provider>
    
  );
}

export default App;
