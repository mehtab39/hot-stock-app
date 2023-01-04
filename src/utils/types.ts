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
  Symbol: {
    price: string;
    time: string;
    Validtill: string;
  };
}
