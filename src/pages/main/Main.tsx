import React, { useState } from 'react';

import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

const Main: React.FC = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <>
      <Button onClick={() => setShow(true)} width='200px' height='50px'>
        Reserve a visit
      </Button>
      <Modal show={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Main;
