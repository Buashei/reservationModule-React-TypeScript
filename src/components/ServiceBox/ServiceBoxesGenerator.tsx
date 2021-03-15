import React, { useContext } from 'react';

//Component Import
import { ServiceBox } from './ServiceBox/ServiceBox';
import { ProcedureBox } from './ProcedureBox/ProcedureBox';
//Context Import
import { ServiceContext } from '../../App';
import { FormContext } from '../../utils/formContext';

export const ServiceBoxesGenerator: React.FC = () => {
  const { data } = useContext(ServiceContext);
  const dataArray = data;
  const [formData, setFormData] = useContext(FormContext);
  if (formData.title) {
    const searchedObject = dataArray.find(x => x.title === formData.title);
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
              setFormData({ title: data.title });
            }}
          >
            <ServiceBox key={data.id} icon={data.icon} title={data.title} serviceAmount={data.amount} />
          </div>
        );
      })}
    </>
  );
};
