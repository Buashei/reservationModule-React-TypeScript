import React, { useContext } from 'react';

//Component Import
import { ServiceBox } from './ServiceBox/ServiceBox';
import { ProcedureBox } from './ProcedureBox/ProcedureBox';
//Type Import
import { ServiceBoxGeneratorProps } from './ServiceBoxGenerator.types';
import { ServiceContext } from '../../App';

export const ServiceBoxesGenerator: React.FC<ServiceBoxGeneratorProps> = props => {
  // const dataArray = props.data;
  const { data } = useContext(ServiceContext);
  const dataArray = data;
  console.log(props.formData);
  if (props.formData.title) {
    const searchedObject = dataArray.find(x => x.title === props.formData.title);
    const procedureObject = searchedObject?.services;
    return (
      <>
        {procedureObject?.map(data => {
          return <ProcedureBox key={data.id} icon={data.icon} title={data.title} description={data.description} price={data.price} />;
        })}
      </>
    );
  }
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
