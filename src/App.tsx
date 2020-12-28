import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/selectService' />
        <Route exact path='/selectServiceExtras' />
        <Route exact path='/selectAgents' />
        <Route exact path='/selectDateTime' />
        <Route exact path='/enterInformation' />
        <Route exact path='/confirmation' />
      </Switch>
    </Router>
  );
};

export default App;
