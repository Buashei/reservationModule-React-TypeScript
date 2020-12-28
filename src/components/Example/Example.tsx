import React from 'react';
import { TitleProps } from './Example.types';

import { Button } from './Example.styles';

export const Example: React.FC<TitleProps> = prop => {
  return <Button> {prop.title} </Button>;
};
