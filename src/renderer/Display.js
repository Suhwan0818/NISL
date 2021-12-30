import styled from 'styled-components';
import MainBoxContainer from './Components/Container/MainBoxContainer';

const BackDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Display = () => {
  return (
    <BackDiv>
      <MainBoxContainer />
    </BackDiv>
  );
};

export default Display;
