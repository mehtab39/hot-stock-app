import Papa from 'papaparse';
import type { ICSVTOJSON } from './types';

export const CSVToJSON: ICSVTOJSON = (CSV) => {
  return Papa.parse(CSV, {
    delimiter: ',',
    complete: (result) => {
      return result.data;
    },
  });
};
