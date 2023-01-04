import styled from 'styled-components';
import { BackButton } from './BackButton';

interface IHeader {
  title: string;
  isBackButtonVisible?: boolean;
}
const Header = ({ title, isBackButtonVisible = false }: IHeader) => {
  return (
    <HeaderWrapper>
      {isBackButtonVisible && <BackButton />}
      <h1>{title}</h1>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export default Header;
