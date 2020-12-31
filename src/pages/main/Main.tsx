import React, { useState } from 'react';

import { Modal } from '../../components/Modal/Modal';
import { Button } from './Main.styles';

const Main: React.FC = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <>
      <Button onClick={() => setShow(true)}> Reserve a visit </Button>
      <Modal show={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Main;
