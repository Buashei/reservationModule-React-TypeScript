import React from 'react';

//Styled Import
import { H2, AsideWrapper, AsideHeader, AsideContent, Description, Stripe, Title } from './RightAside.styles';

const summaryObject = {
  service: 'Root Canal',
  agent: 'Any Agent',
  date: 'January 22',
  time: '09:00 am - 10:00 am',
  total: '$45',
  extras: 'Apply Hair Wax',
};

export const RightAside: React.FC = () => {
  return (
    <AsideWrapper>
      <AsideHeader>
        <H2>Summary</H2>
      </AsideHeader>
      <AsideContent>
        <Stripe>
          <Title>service</Title>
          <Description>{summaryObject.service}</Description>
        </Stripe>
        <Stripe>
          <Title>agent</Title>
          <Description>{summaryObject.agent}</Description>
        </Stripe>
        <Stripe>
          <Title>date</Title>
          <Description>{summaryObject.date}</Description>
        </Stripe>
        <Stripe>
          <Title>time</Title>
          <Description>{summaryObject.time}</Description>
        </Stripe>
        <Stripe>
          <Title>total price</Title>
          <Description>{summaryObject.total}</Description>
        </Stripe>
        <Stripe>
          <Title>extras</Title>
          <Description>{summaryObject.extras}</Description>
        </Stripe>
      </AsideContent>
    </AsideWrapper>
  );
};
