import React from 'react';
import { CustomIconProps } from './CustomIcon.types';

//import icon
import agents from '../../assets/icons/agents.png';
import contact from '../../assets/icons/contact.png';
import datepicker from '../../assets/icons/datepicker.png';
import service_extras from '../../assets/icons/service_extras.png';
import services from '../../assets/icons/services.png';

export const CustomIcon: React.FC<CustomIconProps> = props => {
  if (props.type === 'selectService') {
    return <img src={services}></img>;
  } else if (props.type === 'selectServiceExtras') {
    return <img src={service_extras}></img>;
  } else if (props.type === 'selectAgent') {
    return <img src={agents}></img>;
  } else if (props.type === 'selectDateTime') {
    return <img src={datepicker}></img>;
  } else if (props.type === 'enterInformation') {
    return <img src={contact}></img>;
  }
  return null;
};
