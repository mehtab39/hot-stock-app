export interface IInstrument {
  Symbol: string;
  Name: string;
  Sector: string;
  Validtill: string;
}

export type ICSVTOJSON = (CSV: string) => {
  data: IInstrument[];
};
export interface IQutoes {
    price: string;
    time: string;
    valid_till: string;
}
