import styled from 'styled-components';

const NoData = styled.span`
  display: block;
  margin-top: 40px;
  text-align: left;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background40};
  text-transform: uppercase;
  letter-spacing: 0.2em;

  @media (orientation: landscape) {
    text-align: center;
  }

  @media (min-width: 960px) {
    text-align: center;
  }
`;

export default NoData;
