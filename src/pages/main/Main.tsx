import React, { useState } from 'react';

import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

//Lang File
import { lang } from '../../utils/language';

const serviceObject = [
  {
    id: 1,
    icon: 'tooth',
    title: 'Genral Dentistry',
    amount: 3,
    services: [
      { id: 1, icon: 'service3', title: 'Root Canal', description: 'Slowly he whom important. Only we height', price: 20 },
      { id: 2, icon: 'service1', title: 'Invisilign Braces', description: 'Slowly he whom important. Only we height', price: 30 },
      { id: 3, icon: 'service2', title: 'Teeth Whitening', description: 'Slowly he whom important. Only we height', price: 50 },
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
];

const Main: React.FC = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ title: '' });
  const functionSetFormData = (data: { title: string }) => {
    setFormData(data);
  };
  return (
    <>
      <Button onClick={() => setShow(true)} width='200px' height='50px'>
        {lang.eng.bookAppointment}
      </Button>
      <Modal show={show} onClose={() => setShow(false)} data={serviceObject} formData={formData} setFormData={functionSetFormData} />
    </>
  );
};

export default Main;
