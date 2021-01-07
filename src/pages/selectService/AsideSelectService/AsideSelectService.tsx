import React from 'react';

//Styled Import
import { AsideWrapper, AsideHeader, AsideContent, AsideFooter, Description, DescriptionWrapper } from './AsideSelectService.styles';
import { H1, H3 } from '../selectService.styles';
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
        <DescriptionWrapper>
          <H1>{lang.eng.selectService}</H1>
          <Description>{lang.eng.selectServiceDesc}</Description>
        </DescriptionWrapper>
      </AsideContent>
      <AsideFooter>
        <DescriptionWrapper>
          <H3>{lang.eng.questions}</H3>
          <Description>{lang.eng.callForHelp}</Description>
        </DescriptionWrapper>
      </AsideFooter>
    </AsideWrapper>
  );
};
