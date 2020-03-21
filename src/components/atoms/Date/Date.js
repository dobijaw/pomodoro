import styled from 'styled-components';

const Date = styled.span`
  display: block;
  padding: 0;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1;
`;

export default Date;
