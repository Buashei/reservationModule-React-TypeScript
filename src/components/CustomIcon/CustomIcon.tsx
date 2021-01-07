import React from 'react';
import { CustomIconProps } from './CustomIcon.types';
import { Img } from './CustomIcon.styles';

//import icon
import agents from '../../assets/icons/agents.png';
import contact from '../../assets/icons/contact.png';
import datepicker from '../../assets/icons/datepicker.png';
import service_extras from '../../assets/icons/service_extras.png';
import services from '../../assets/icons/services.png';

export const CustomIcon: React.FC<CustomIconProps> = props => {
  if (props.type === 'selectService') {
    return <Img src={services} />;
  } else if (props.type === 'selectServiceExtras') {
    return <Img src={service_extras} />;
  } else if (props.type === 'selectAgent') {
    return <Img src={agents} />;
  } else if (props.type === 'selectDateTime') {
    return <Img src={datepicker} />;
  } else if (props.type === 'enterInformation') {
    return <Img src={contact} />;
  }
  return null;
};
