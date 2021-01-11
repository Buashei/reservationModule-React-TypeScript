import React from 'react';

//Component Import
import { ServiceBox } from './ServiceBox/ServiceBox';
//Type Import
import { ServiceBoxGeneratorProps } from './ServiceBoxGenerator.types';

export const ServiceBoxesGenerator: React.FC<ServiceBoxGeneratorProps> = props => {
  const dataArray = props.data;
  return (
    <>
      {dataArray.map(data => {
        return <ServiceBox key={data.id} icon={data.icon} title={data.title} serviceAmount={data.amount} />;
      })}
    </>
  );
};
