import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';

import { GlobalStyle } from './App.styles';
import { theme } from './utils/theme';
import { Layout } from './layout/Layout';

import Main from './pages/main/Main';

import { ServiceContextType } from './App.types';

const serviceObject: ServiceContextType = {
  data: [
    {
      id: 1,
      icon: 'tooth',
      title: 'Genral Dentistry',
      amount: 3,
      services: [
        { id: 1, icon: 'service3', title: 'Root Canal', description: 'Slowly he whom important. Only we height', price: 20 },
        { id: 2, icon: 'service1', title: 'Invisilign Braces', description: 'Slowly he whom important. Only we height', price: 30 },
        { id: 3, icon: 'service2', title: 'Teeth Whitening', description: 'Slowly he whom important. Only we height', price: 50 },
        { id: 4, icon: 'service2', title: 'Teeth Whitening', description: 'Slowly he whom important. Only we height', price: 50 },
        { id: 5, icon: 'service2', title: 'Teeth Whitening', description: 'Slowly he whom important. Only we height', price: 50 },
        { id: 6, icon: 'service2', title: 'Teeth Whitening', description: 'Slowly he whom important. Only we height', price: 50 },
      ],
    },
    {
      id: 2,
      icon: 'weight',
      title: 'Weight Management',
      amount: 2,
      services: [
        {
          id: 1,
          icon: 'service9',
          title: 'Spin Class Indoor',
          description: 'Slowly he whom important. Only we height',
          price: 20,
          durationPrices: [20, 40, 60],
        },
        {
          id: 2,
          icon: 'service10',
          title: 'Hot Yoga Class',
          description: 'Slowly he whom important. Only we height',
          price: 30,
          durationPrices: [30, 40, 60],
        },
      ],
    },
    {
      id: 3,
      icon: 'psychology',
      title: 'Psychology Services',
      amount: 3,
      services: [
        {
          id: 1,
          icon: 'service5',
          title: 'Counseling for Couples',
          description: 'Slowly he whom important. Only we height',
          price: 30,
          durationPrices: [30, 60, 100],
        },
        {
          id: 2,
          icon: 'service4',
          title: 'Panic Attacks',
          description: 'Slowly he whom important. Only we height',
          price: 20,
          durationPrices: [20, 40, 60],
        },
        {
          id: 3,
          icon: 'service6',
          title: 'Stress Management',
          description: 'Slowly he whom important. Only we height',
          price: 20,
          durationPrices: [20, 40, 60],
        },
      ],
    },
    {
      id: 4,
      icon: 'massage',
      title: 'Massage and Recovery',
      amount: 2,
      services: [
        {
          id: 1,
          icon: 'service7',
          title: 'Deep Tissue Massage',
          description: 'Slowly he whom important. Only we height',
          price: 20,
          durationPrices: [20, 40, 60],
        },
        {
          id: 2,
          icon: 'service8',
          title: 'Hot Stone Massage',
          description: 'Slowly he whom important. Only we height',
          price: 40,
          durationPrices: [40, 50, 80],
        },
      ],
    },
  ],
};
export interface FormDataType {
  formData: { title: string };
  setFormData: React.Dispatch<React.SetStateAction<{ title: string }>>;
}

export const ServiceContext = createContext<ServiceContextType>(serviceObject);
const [formData, setFormData] = useState({ title: '' });
export const FormData = createContext<FormDataType>({ formData, setFormData });

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
              <ServiceContext.Provider value={serviceObject}>
                <FormData.Provider value={{ formData, setFormData }}>
                  <Route exact path='/select-service' />
                  <Route exact path='/select-service-extras' />
                  <Route exact path='/select-agents' />
                  <Route exact path='/select-date-time' />
                  <Route exact path='/enter-information' />
                  <Route exact path='/confirmation' />
                </FormData.Provider>
              </ServiceContext.Provider>
            </>
          </ThemeProvider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
