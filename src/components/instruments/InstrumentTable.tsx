import { useNavigate } from 'react-router-dom';
import type { IInstrument } from '../../utils/types';

function Table({ data }: { data: IInstrument[] }) {
  const navigate = useNavigate();
  const handleSymbolClick = (event: any) => {
    event.stopPropagation();
    const instrument = event.target.innerText;
    if (typeof instrument === 'string') {
      navigate(`/quotes/${instrument}`, { replace: true });
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Symbol}>
            <td onClick={handleSymbolClick}>{item.Symbol}</td>
            <td>{item.Name}</td>
            <td>{item.Sector}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
