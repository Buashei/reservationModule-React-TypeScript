import React from 'react';
import { Dot } from './Dot';

import { DotStepIndicatorWrapper } from './DotStepIndicator.styles';
//Lang File
import { lang } from '../../utils/language';

export const DotStepIndicator: React.FC = () => {
  return (
    <DotStepIndicatorWrapper>
      <Dot status='success' title={lang.eng.selectService} />
      <Dot status='wait' title={lang.eng.selectServiceExtras} />
      <Dot status='wait' title={lang.eng.selectAgent} />
      <Dot status='wait' title={lang.eng.selectDateTime} />
      <Dot status='wait' title={lang.eng.enterInformation} />
      <Dot status='wait' title={lang.eng.confirmation} />
    </DotStepIndicatorWrapper>
  );
};
