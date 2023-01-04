import styled from 'styled-components';
import { IQutoes } from '../../utils/types';

const List = ({
  quotes,
  instrument,
}: {
  quotes: IQutoes[];
  instrument: string;
}) => {
  return (
    <MainTable>
      <thead>
        <TR>
          <TH>Price</TH>
          <TH>Time</TH>
        </TR>
      </thead>
      <tbody>
        {quotes.map((item, index) => (
          <TR key={`${index}-${instrument}`}>
            <Symbol>{Number(item.price).toFixed(2)}</Symbol>
            <Symbol>{item.time}</Symbol>
          </TR>
        ))}
      </tbody>
    </MainTable>
  );
};
export default List;

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
  &:hover {
    text-decoration: underline;
  }
`;
