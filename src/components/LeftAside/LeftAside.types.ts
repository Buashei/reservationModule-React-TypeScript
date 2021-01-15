export type Keys = 'selectService' | 'selectServiceExtras' | 'selectAgent' | 'selectDateTime' | 'enterInformation' | 'confirmation';

export interface Types {
  mainHeader: string;
  mainDescription: string;
  secondHeader: string;
  secondDescription: string;
}

export type LeftAsideProps = {
  type: Keys;
};

// export interface ObjectTypes {
//   [key: string]: any;
// }
