import { useParams } from 'react-router-dom';
import useQuotes from '../../hooks/useQuotes';
import List from './list';

const Quotes = () => {
  let { instrument } = useParams();
  const { quotes } = useQuotes(instrument);
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
