import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/select-service' />
        <Route exact path='/select-service-extras' />
        <Route exact path='/select-agents' />
        <Route exact path='/select-date-time' />
        <Route exact path='/enter-information' />
        <Route exact path='/confirmation' />
      </Switch>
    </Router>
  );
};

export default App;
