import { useParams } from 'react-router-dom';
import useQuotes from '../../hooks/useQuotes';
import Header from '../Header';
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
    <div>
      <Header
        title={`Quotes for ${instrument}`}
        isBackButtonVisible
      />
      <List quotes={quotes} instrument={instrument} />
    </div>
  );
};

export default Quotes;
