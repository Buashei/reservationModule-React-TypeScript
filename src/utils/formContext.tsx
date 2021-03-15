/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext } from 'react';

export const FormContext = createContext<
  [
    { title: string },
    React.Dispatch<
      React.SetStateAction<{
        title: string;
      }>
    >,
  ]
>({} as any);

export const FormProvider: React.FC = props => {
  const [formData, setFormData] = useState({ title: '' });
  return <FormContext.Provider value={[formData, setFormData]}>{props.children}</FormContext.Provider>;
};
