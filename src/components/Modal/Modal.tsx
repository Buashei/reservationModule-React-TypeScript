import React, { useState } from 'react';
import { ModalWrapper, ModalContent } from './Modal.style';
import { ToShowModalProps } from './Modal.types';
import { SelectService } from '../../pages/selectService/selectService';

const serviceObject = [
  {
    id: 1,
    icon: 'tooth',
    title: 'Genral Dentistry',
    amount: 3,
    services: [
      { title: 'Root Canal', description: 'Slowly he whom important. Only we height', price: 20 },
      { title: 'Invisilign Braces', description: 'Slowly he whom important. Only we height', price: 30 },
      { title: 'Teeth Whitening', description: 'Slowly he whom important. Only we height', price: 50 },
    ],
  },
  {
    id: 2,
    icon: 'weight',
    title: 'Weight Management',
    amount: 2,
    services: [
      { title: 'Spin Class Indoor', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
      { title: 'Hot Yoga Class', description: 'Slowly he whom important. Only we height', price: 30, durationPrices: [30, 40, 60] },
    ],
  },
  {
    id: 3,
    icon: 'psychology',
    title: 'Psychology Services',
    amount: 3,
    services: [
      {
        title: 'Counseling for Couples',
        description: 'Slowly he whom important. Only we height',
        price: 30,
        durationPrices: [30, 60, 100],
      },
      { title: 'Panic Attacks', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
      { title: 'Stress Management', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
    ],
  },
  {
    id: 4,
    icon: 'massage',
    title: 'Massage and Recovery',
    amount: 2,
    services: [
      { title: 'Deep Tissue Massage', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
      { title: 'Hot Stone Massage', description: 'Slowly he whom important. Only we height', price: 40, durationPrices: [40, 50, 80] },
    ],
  },
];

export const Modal: React.FC<ToShowModalProps> = props => {
  const [formData, setFormData] = useState({ title: '' });
  const functionSetFormData = (data: { title: string }) => {
    setFormData(data);
  };

  if (!props.show) {
    return null;
  }
  // const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     props.onClose();
  //   }
  // };
  // useEffect(() => {
  //   document.body.addEventListener('keydown', closeOnEscapeKeyDown);
  //   return () => {
  //     document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
  //   };
  // }, []);
  return (
    <ModalWrapper onClick={props.onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <SelectService
          onClose={props.onClose}
          type={'selectService'}
          data={serviceObject}
          formData={formData}
          setFormData={functionSetFormData}
        />
      </ModalContent>
    </ModalWrapper>
  );
};
