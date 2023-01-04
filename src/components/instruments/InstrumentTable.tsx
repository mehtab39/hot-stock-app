import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import type { IInstrument } from '../../utils/types';

function Table({ data }: { data: IInstrument[] }) {
  const navigate = useNavigate();
  const handleSymbolClick = (instrument: string) => {
    navigate(`/quotes/${instrument}`, { replace: true });
  };
  return (
    <MainTable>
      <thead>
        <TR>
          <TH>Symbol</TH>
          <TH>Name</TH>
          <TH>Sector</TH>
        </TR>
      </thead>
      <tbody>
        {data.map((item) => (
          <TR
            onClick={() => handleSymbolClick(item.Symbol)}
            key={item.Symbol}
          >
            <Symbol>{item.Symbol}</Symbol>
            <Symbol>{item.Name}</Symbol>
            <TD>{item.Sector}</TD>
          </TR>
        ))}
      </tbody>
    </MainTable>
  );
}

const MainTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Symbol = styled(TD)`
  padding: 8px;
  padding-top: 12px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Table;
