import React, { useState } from 'react';

import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

//Lang File
import { lang } from '../../utils/language';

const Main: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)} width='200px' height='50px'>
        {lang.eng.bookAppointment}
      </Button>
      <Modal show={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Main;
