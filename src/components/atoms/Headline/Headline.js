import styled from 'styled-components';

const Headline = styled.h1`
  display: block;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.copy};
  font-size: ${({ customWidth, theme }) => customWidth || theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.08em;
  line-height: 1.5;
`;

export default Headline;
