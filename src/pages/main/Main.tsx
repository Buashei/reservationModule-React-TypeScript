import React, { useState } from 'react';

import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

//Lang File
import { lang } from '../../utils/language';

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
      <Modal show={show} onClose={() => setShow(false)} formData={formData} setFormData={functionSetFormData} />
    </>
  );
};

export default Main;
