import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuote } from '../../utils/fetch';
import { IQutoes } from '../../utils/types';

const Quotes = () => {
  let { instrument } = useParams();
  const [quote, setQuote] = useState<IQutoes | null>(null);
  console.log('quote:', quote)
  const getQuote = async () => {
    if (instrument) {
      const data = await fetchQuote(instrument);
      setQuote(data);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);
  return <></>;
};

export default Quotes;
