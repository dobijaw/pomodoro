import styled from 'styled-components';

const NoData = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background40};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export default NoData;
