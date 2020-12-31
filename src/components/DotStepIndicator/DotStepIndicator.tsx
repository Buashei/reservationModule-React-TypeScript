// eslint-disable
import React from 'react';
import { Steps, Tooltip } from 'antd';
import { colors } from '../../utils/colors';

const { Step } = Steps;

const popoverInformation = (index: number) => {
  switch (index) {
    case 0:
      return 'Select Service';
    case 1:
      return 'Select Service Extras';
    case 2:
      return 'Select Agent';
    case 3:
      return 'Select Date & Time';
    case 4:
      return 'Enter Information';
    case 5:
      return 'Confirmation';
    default:
      break;
  }
};

const customDot: React.FC = (dot, { index }) => (
  <Tooltip title={<span>{popoverInformation(index)}</span>} placement='bottom' color={colors.main}>
    {dot}
  </Tooltip>
);

export const DotStepIndicator: React.FC = () => {
  return (
    <Steps current={0} progressDot={customDot} direction={'horizontal'}>
      <Step />
      <Step />
      <Step />
      <Step />
      <Step />
    </Steps>
  );
};
