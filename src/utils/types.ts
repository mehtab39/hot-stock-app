export enum InstrumentEnum {
  Symbol,
  Name,
  Sector,
  Validtill,
}
export interface IInstrument {
  Symbol: string;
  Name: string;
  Sector: string;
  Validtill: string;
}

export type IInstrumentTupple = [
  IInstrument['Symbol'],
  IInstrument['Name'],
  IInstrument['Sector'],
  IInstrument['Validtill']
];

export type ICSVTOJSON = (CSV: string) => {
  data: IInstrumentTupple[];
};
export interface IQutoes {
  Symbol: {
    price: string;
    time: string;
    Validtill: string;
  };
}
