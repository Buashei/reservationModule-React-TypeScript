import React from 'react';
import { StyledDot } from './Dot.styles';
import { DotStepIndicatorProps } from '../DotStepIndicator.types';
import { Tooltip } from 'antd';

export const Dot: React.FC<DotStepIndicatorProps> = props => {
  return (
    <Tooltip placement='top' title={props.title}>
      <StyledDot status={props.status} />
    </Tooltip>
  );
};
