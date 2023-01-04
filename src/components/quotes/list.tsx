import { IQutoes } from '../../utils/types';

const List = ({
  quotes,
  instrument,
}: {
  quotes: IQutoes[];
  instrument: string;
}) => {
  console.log('quotes:', quotes)

  return (
    <div>
      <ul>
        {quotes.map((quote, index) => (
          <li key={`instrument-${index}`}>
            <strong>{quote.price}</strong>
            <br />
            <span>{quote.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
