import { useEffect, useMemo, useState } from 'react';
import { fetchInstruments } from '../../utils/fetch';
import type { IInstrument } from '../../utils/types';
import Header from '../Header';
import Table from './InstrumentTable';
import Search from './SearchInput';

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

  const [input, setInput] = useState('');

  const filteredInstruments = useMemo(() => {
    if (null === instruments) {
      return null;
    }
    if (input === '') {
      return instruments;
    }

    return instruments.filter(({ Name, Symbol, Sector }) => {
      const filter = (value: string) =>
        value.toLowerCase().includes(input.toLowerCase());
      const filteredData = [Name, Symbol, Sector].find(filter);
      return !!filteredData;
    });
  }, [input, instruments]);

  return null === filteredInstruments ? (
    <h1>Loading stocks...</h1>
  ) : (
    <div>
      <Header title={'Hot Stock'} isBackButtonVisible={false} />
      <Search setInput={setInput} input={input} />
      <Table data={filteredInstruments} />
    </div>
  );
};

export default Instruments;
