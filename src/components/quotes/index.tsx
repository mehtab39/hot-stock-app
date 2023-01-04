import { useEffect, useState } from 'react';
import { fetchQuote } from '../../utils/fetch';
import { IQutoes } from '../../utils/types';

const Quotes = () => {
  const [quote, setQuote] = useState<IQutoes | null>(null);
  const getQuote = async () => {
    const data = await fetchQuote('BRITANNIA');
    setQuote(data);
  };

  useEffect(() => {
    getQuote();
  }, []);
  return <></>;
};

export default Quotes;
