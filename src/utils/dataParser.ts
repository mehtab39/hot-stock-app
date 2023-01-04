import Papa from 'papaparse';
import { ICSVTOJSON } from './types';

export const CSVToJSON: ICSVTOJSON = (CSV) => {
  return Papa.parse(CSV, {
    delimiter: ',',
    header: true,
    skipEmptyLines: true,
  });
};
