import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuote } from '../../utils/fetch';
import { IQutoes } from '../../utils/types';
import List from './list';

const Quotes = () => {
  let { instrument } = useParams();
  const [quotes, setQuotes] = useState<IQutoes[] | null>(null);
  useEffect(() => {
    const getQuote = async () => {
      if (instrument) {
        const data = await fetchQuote(instrument);
        setQuotes(data);
      }
    };
    getQuote();
  }, [instrument]);

  if (undefined === instrument) {
    return null;
  }

  return null === quotes ? (
    <h1>Loading quotes for {instrument} </h1>
  ) : (
    <List quotes={quotes} instrument={instrument} />
  );
};

export default Quotes;
