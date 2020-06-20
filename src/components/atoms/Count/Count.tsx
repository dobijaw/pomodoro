import styled from 'styled-components';

const Count = styled.span`
  display: block;
  min-width: 40px;
  height: 40px;
  padding: 0 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background20};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0;
  text-align: center;
`;

export default Count;
