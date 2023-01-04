import { CSVToJSON } from './dataParser';
import { IInstrument } from './types';

export const BASE_ENDPOINT = 'https://prototype.sbulltech.com/api/v2';

export const getRequest = async (API: string) => {
  try {
    const response = await fetch(BASE_ENDPOINT + API);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchInstruments = async (): Promise<
  IInstrument[] | null
> => {
  const response = await getRequest('/instruments');
  if (response) {
    const csv = await response.text();
    const json = await CSVToJSON(csv);
    return json.data;
  }
  return null;
};
