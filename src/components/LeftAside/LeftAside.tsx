import React from 'react';

//Styled Import
import { AsideWrapper, AsideHeader, AsideContent, AsideFooter, Description, DescriptionWrapper } from './LeftAside.styles';
import { H1, H3 } from '../../pages/selectService/selectService.styles';
//Component Import
import { DotStepIndicator } from '../DotStepIndicator/DotStepIndicator';
import { CustomIcon } from '../CustomIcon/CustomIcon';
//Lang Import
import { lang } from '../../utils/language';
//Props Import
import { Keys, Types, LeftAsideProps } from './LeftAside.types';

const leftAsideObject: Record<Keys, Types> = {
  selectService: {
    mainHeader: lang.eng.selectService,
    mainDescription: lang.eng.selectServiceDesc,
    secondHeader: lang.eng.questions,
    secondDescription: lang.eng.callForHelp,
  },
  selectServiceExtras: {
    mainHeader: lang.eng.selectServiceExtras,
    mainDescription: lang.eng.selectServiceExtrasDesc,
    secondHeader: lang.eng.questions,
    secondDescription: lang.eng.callForHelp,
  },
  selectAgent: {
    mainHeader: lang.eng.selectAgent,
    mainDescription: lang.eng.selectAgentDesc,
    secondHeader: lang.eng.questions,
    secondDescription: lang.eng.callForHelp,
  },
  selectDateTime: {
    mainHeader: lang.eng.selectDateTime,
    mainDescription: lang.eng.selectDateTimeDesc,
    secondHeader: lang.eng.questions,
    secondDescription: lang.eng.callForHelp,
  },
  enterInformation: {
    mainHeader: lang.eng.selectAgent,
    mainDescription: lang.eng.selectAgentDesc,
    secondHeader: lang.eng.questions,
    secondDescription: lang.eng.callForHelp,
  },
  confirmation: {
    mainHeader: lang.eng.confirmation,
    mainDescription: lang.eng.confirmationDesc,
    secondHeader: lang.eng.questions,
    secondDescription: lang.eng.callForHelp,
  },
};

export const LeftAside: React.FC<LeftAsideProps> = ({ type }) => {
  return (
    <AsideWrapper>
      <AsideHeader>
        <DotStepIndicator />
      </AsideHeader>
      <AsideContent>
        <CustomIcon type={type} />
        <DescriptionWrapper>
          <H1>{leftAsideObject[type].mainHeader}</H1>
          <Description>{leftAsideObject[type].mainDescription}</Description>
        </DescriptionWrapper>
      </AsideContent>
      <AsideFooter>
        <DescriptionWrapper>
          <H3>{leftAsideObject[type].secondHeader}</H3>
          <Description>{leftAsideObject[type].secondDescription}</Description>
        </DescriptionWrapper>
      </AsideFooter>
    </AsideWrapper>
  );
};
