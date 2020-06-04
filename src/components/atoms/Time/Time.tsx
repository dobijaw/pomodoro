import styled from 'styled-components';

const Time = styled.span<{ asMain?: boolean }>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 48px;
  font-weight: 600;
`;

export default Time;
