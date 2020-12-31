import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';

import { GlobalStyle } from './App.styles';
import { theme } from './utils/theme';
import { Layout } from './layout/Layout';

import Main from './pages/main/Main';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <>
              <Layout>
                <Route exact path='/' component={Main} />
              </Layout>
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
    </>
  );
};

export default App;
