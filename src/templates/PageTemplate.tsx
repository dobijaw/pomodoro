import React from 'react';
import styled from 'styled-components';
import Wrapper from 'components/atoms/Wrapper/Wrapper';
import Navigation from 'components/organisms/Navigation/Navigation';

const Main = styled.main`
  display: block;
  margin: 40px 0 0;
`;

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => (
  <Wrapper>
    <Navigation />
    <Main>{children}</Main>
  </Wrapper>
);

export default PageTemplate;
