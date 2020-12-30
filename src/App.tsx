import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './utils/theme';

import Main from './pages/main/Main';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <>
            <Route exact path='/' component={Main} />
            <Route exact path='/select-service' />
            <Route exact path='/select-service-extras' />
            <Route exact path='/select-agents' />
            <Route exact path='/select-date-time' />
            <Route exact path='/enter-information' />
            <Route exact path='/confirmation' />
          </>
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

export default App;
