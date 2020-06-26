import styled from 'styled-components';

const Headline = styled.h1<{ customWidth?: string }>`
  display: block;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.copy};
  font-size: ${({ customWidth, theme }) => customWidth || '20px'};
  font-weight: 400;
  letter-spacing: 0.08em;
  line-height: 1.5;

  @media (min-width: 960px) {
    font-size: ${({ customWidth, theme }) => customWidth || '26px'};
  }
`;

export default Headline;
