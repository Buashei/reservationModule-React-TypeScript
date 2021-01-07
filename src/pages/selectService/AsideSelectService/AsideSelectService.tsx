import React from 'react';

//Styled Import
import { AsideWrapper, AsideHeader, AsideContent, AsideFooter, DescriptionWrapper } from './AsideSelectService.styles';
import { H3, H5 } from '../selectService.styles';
//Component Import
import { DotStepIndicator } from '../../../components/DotStepIndicator/DotStepIndicator';
import { CustomIcon } from '../../../components/CustomIcon/CustomIcon';
//Lang Import
import { lang } from '../../../utils/language';

export const AsideSelectService: React.FC = () => {
  return (
    <AsideWrapper>
      <AsideHeader>
        <DotStepIndicator />
      </AsideHeader>
      <AsideContent>
        <CustomIcon type='selectService' />
        <H3>{lang.eng.selectService}</H3>
        <DescriptionWrapper>{lang.eng.selectServiceDesc}</DescriptionWrapper>
      </AsideContent>
      <AsideFooter>
        <H5>{lang.eng.questions}</H5>
        <DescriptionWrapper>{lang.eng.callForHelp}</DescriptionWrapper>
      </AsideFooter>
    </AsideWrapper>
  );
};
