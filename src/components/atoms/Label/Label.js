import styled from 'styled-components';

const Label = styled.label`
  display: block;
  padding: 0;
  margin: 6px 0;
  color: ${({ theme }) => theme.colors.details};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export default Label;
