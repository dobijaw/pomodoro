import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 600px) {
    padding: 40px;
  }

  @media (min-width: 960px) {
    padding: 60px;
  }
`;

export default Wrapper;
