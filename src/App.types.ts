import React, { Dispatch, SetStateAction } from 'react';

export type ServiceContextType = {
  data: Data[];
};
export interface Data {
  id: number;
  icon: string;
  title: string;
  amount: number;
  services: {
    id: number;
    icon: string;
    title: string;
    description: string;
    price: number;
    durationPrices?: number[];
  }[];
}
