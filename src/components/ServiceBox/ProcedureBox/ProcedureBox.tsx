import React from 'react';

//component import
import { CustomIcon } from '../../CustomIcon/CustomIcon';

//styled import
import {
  BoxWrapper,
  ProcedureTileContainer,
  ProcedurePriceContainer,
  ProcedureDescription,
  ProcedurePriceWrapper,
  ProcedurePrice,
} from './ProcedureBox.styles';

//type import
import { ProcedureBoxProps } from './ProcedureBox.types';

export const ProcedureBox: React.FC<ProcedureBoxProps> = props => {
  return (
    <BoxWrapper>
      <CustomIcon type={props.icon} isSmall />
      <div>
        <ProcedureTileContainer>
          {props.title}
          <ProcedureDescription>{props.description}</ProcedureDescription>
        </ProcedureTileContainer>
      </div>
      <ProcedurePriceContainer>
        <ProcedurePriceWrapper>
          <ProcedurePrice>$ {props.price}</ProcedurePrice>
          <p>Starts From</p>
        </ProcedurePriceWrapper>
      </ProcedurePriceContainer>
    </BoxWrapper>
  );
};
