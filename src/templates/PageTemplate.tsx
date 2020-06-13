import React from 'react';
import styled from 'styled-components';
import Wrapper from 'components/atoms/Wrapper/Wrapper';
import Navigation from 'components/organisms/Navigation/Navigation';

const Main = styled.main<{ isSubPage?: boolean }>`
  display: block;
  margin: ${({ isSubPage }) => (isSubPage ? '140px auto 0' : '40px auto 0')};
  max-width: 768px;
`;

type PageTemplateProps = {
  children: React.ReactNode;
  isSubPage?: boolean;
};

const PageTemplate: React.FC<PageTemplateProps> = ({ children, isSubPage }) => (
  <Wrapper>
    <Navigation />
    <Main isSubPage={isSubPage}>{children}</Main>
  </Wrapper>
);

export default PageTemplate;
