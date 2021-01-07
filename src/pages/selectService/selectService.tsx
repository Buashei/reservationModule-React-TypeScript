import React from 'react';

//Component Import
import { AsideSelectService } from './AsideSelectService/AsideSelectService';

import { selectServiceProps } from './selectService.types';

export const SelectService: React.FC<selectServiceProps> = () => {
  return (
    <>
      <AsideSelectService />
    </>
  );
};
