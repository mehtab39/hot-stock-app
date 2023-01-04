export interface IInstrument {
  Symbol: string;
  Name: string;
  Sector: string;
  Validtill: string;
}

export type ICSVTOJSON = (CSV: string) => {
  data: IInstrument[];
};
