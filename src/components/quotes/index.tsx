import { useParams } from 'react-router-dom';
import useQuotes from '../../hooks/useQuotes';
import Header from '../Header';
import List from './QuoteList';

const Quotes = () => {
  let { instrument } = useParams();
  const { quotes, toggleSort, isAscSorted } = useQuotes(instrument);

  if (undefined === instrument) {
    return null;
  }

  return (
    <div>
      <Header
        title={`Quotes for ${instrument}`}
        isBackButtonVisible
      />
      {null === quotes ? (
        <h1>Loading</h1>
      ) : (
        <List quotes={quotes} instrument={instrument} toggleSort={toggleSort} isAscSorted={isAscSorted} />
      )}
    </div>
  );
};

export default Quotes;
