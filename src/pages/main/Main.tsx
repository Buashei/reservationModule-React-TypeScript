import React from 'react';
import { Layout } from '../../layout/Layout.tsx';

import { Button } from './Main.styles';

const Main: React.FC = () => {
  return (
    <Layout>
      <Button> Reserve a visit </Button>;
    </Layout>
  );
};

export default Main;
