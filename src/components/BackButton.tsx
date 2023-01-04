import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate('/');
  };
  return (
    <BackButtonWrapper onClick={handleBackButton}>
      <FaArrowAltCircleLeft />
      <Text>Back</Text>
    </BackButtonWrapper>
  );
};

const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 10px;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 14px;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
