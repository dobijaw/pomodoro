import styled from 'styled-components';

const NumberShape = styled.span`
  display: block;
  width: 45px;
  padding: 0;
  border-radius: 50%;
  margin: 0;
  background: ${({ theme }) => theme.colors.backgroundLighter};
  color: ${({ theme }) => theme.colors.importantText};
  line-height: 45px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
`;

export default NumberShape;
