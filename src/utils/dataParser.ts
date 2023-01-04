import Papa from 'papaparse';
import {
  ICSVTOJSON,
  IInstrument,
  IInstrumentTupple,
  InstrumentEnum,
} from './types';

const CSVToJSON: ICSVTOJSON = (CSV) => {
  return Papa.parse(CSV, {
    delimiter: ',',
    complete: (result) => {
      return result.data;
    },
  });
};

 const jsonToInstrumentParser = (
  instruments: IInstrumentTupple[]
) => {
  instruments.shift(); //elements in first index only includes keys
  const data: IInstrument[] = [];
  instruments.forEach((instrument) => {
    data.push({
      Symbol: instrument[InstrumentEnum.Symbol],
      Name: instrument[InstrumentEnum.Name],
      Sector: instrument[InstrumentEnum.Sector],
      Validtill: instrument[InstrumentEnum.Validtill],
    });
  });
  return data;
};

export const CSVToInstrumentParser = async (csv: string) => {
  const json = await CSVToJSON(csv);
  const instruments = jsonToInstrumentParser(json.data);
  return instruments;
};
