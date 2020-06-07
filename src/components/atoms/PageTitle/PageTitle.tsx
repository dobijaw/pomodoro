import styled from 'styled-components';

const PageTitle = styled.h1`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`;

export default PageTitle;
