import React, { useState } from 'react';

import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { CustomIcon } from '../../components/CustomIcon/CustomIcon';

const Main: React.FC = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <>
      <Button onClick={() => setShow(true)} width='200px' height='50px'>
        Reserve a visit
      </Button>
      <Modal show={show} onClose={() => setShow(false)} />
      <CustomIcon type='selectService' />
    </>
  );
};

export default Main;
