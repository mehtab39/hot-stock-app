import { useEffect, useState } from 'react';
import { fetchInstruments } from '../../utils/fetch';
import type { IInstrument } from '../../utils/types';

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

  return <></>;
};

export default Instruments;
