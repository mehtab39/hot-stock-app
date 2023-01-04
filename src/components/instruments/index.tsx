import { useEffect, useState } from 'react';
import { fetchInstruments } from '../../utils/fetch';
import type { IInstrument } from '../../utils/types';
import Header from './Header';
import Table from './InstrumentTable';

const Instruments = () => {
  const [instruments, setInstruments] = useState<
    null | IInstrument[]
  >(null);

  useEffect(() => {
    const getInstruments = async () => {
      const response = await fetchInstruments();
      setInstruments(response);
    };
    getInstruments();
  }, []);

  return null === instruments ? (
    <h1>Loading stocks...</h1>
  ) : (
    <div>
      <Header />
      <Table data={instruments} />
    </div>
  );
};

export default Instruments;
