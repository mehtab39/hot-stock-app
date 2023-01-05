import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
} from 'react-icons/fa';
import styled from 'styled-components';
import { IQutoes } from '../../utils/types';

interface IList {
  quotes: IQutoes[];
  instrument: string;
  isAscSorted: boolean;
  toggleSort(): void;
}
const List = ({
  quotes,
  instrument,
  isAscSorted,
  toggleSort,
}: IList) => {
  return (
    <MainTable>
      <thead>
        <TR>
          <TH>Price (&#x20b9;)</TH>
          <TimestampHeader>
            Time (YYYY-MM-DD hh-mm-ss)
            <SortButton>
              {isAscSorted ? (
                <FaArrowAltCircleUp
                  fill={'black'}
                  onClick={toggleSort}
                />
              ) : (
                <FaArrowAltCircleDown
                  fill={'black'}
                  onClick={toggleSort}
                />
              )}
            </SortButton>
          </TimestampHeader>
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

const TimestampHeader = styled(TH)`
  display: flex;
`;

const SortButton = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;
