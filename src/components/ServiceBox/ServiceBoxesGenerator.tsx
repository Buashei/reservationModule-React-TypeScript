import React from 'react';

//Component Import
import { ServiceBox } from './ServiceBox/ServiceBox';
//Type Import
import { ServiceBoxGeneratorProps } from './ServiceBoxGenerator.types';

export const ServiceBoxesGenerator: React.FC<ServiceBoxGeneratorProps> = props => {
  const dataArray = props.data;
  console.log(props.formData);
  return (
    <>
      {dataArray.map(data => {
        return (
          <div
            key={data.id}
            onClick={() => {
              props.setFormData({ title: data.title });
            }}
          >
            <ServiceBox key={data.id} icon={data.icon} title={data.title} serviceAmount={data.amount} />
          </div>
        );
      })}
    </>
  );
};
