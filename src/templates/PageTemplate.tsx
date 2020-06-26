import React from 'react';
import styled from 'styled-components';
import Wrapper from 'components/atoms/Wrapper/Wrapper';
import Navigation from 'components/organisms/Navigation/Navigation';

const Main = styled.main<{ isSubPage?: boolean }>`
  display: block;
  margin: ${({ isSubPage }) => (isSubPage ? '60px auto 0' : '40px auto 0')};
  max-width: 768px;

  @media (min-width: 480px) {
    margin: ${({ isSubPage }) => (isSubPage ? '80px auto 0' : '60px auto 0')};
  }

  @media (min-width: 500px) {
    padding: 20px 30px;
  }

  @media (min-width: 960px) {
    margin: ${({ isSubPage }) => (isSubPage ? '140px auto 0' : '40px auto 0')};
  }
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
