import { useEffect, useState } from 'react';
import { fetchInstruments } from '../../utils/fetch';
import type { IInstrument } from '../../utils/types';
import Table from './InstrumentTable';

const Instruments = () => {
  const [instruments, setInstruments] = useState<
    null | IInstrument[]
  >(null);

  const getInstruments = async () => {
    const response = await fetchInstruments();
    setInstruments(response);
  };
  useEffect(() => {
    getInstruments();
  }, []);

  return null === instruments ? (
    <h1>Loading stocks...</h1>
  ) : (
    <Table data={instruments} />
  );
};

export default Instruments;
