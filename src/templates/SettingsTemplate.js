import React from 'react';
import styled from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';
import FormCooseItem from 'components/molecules/FormChooseItem/FormChooseItem';

const SettingsWrapper = styled.div`
  background: red;
`;

const StyledInnerWrapper = styled.section`
  margin-bottom: 60px;
  background: blue;
`;

const SettingsTemplate = () => (
  <SettingsWrapper>
    <StyledInnerWrapper>
      <Headline as="h2">Pomodoro theme</Headline>
      <FormCooseItem name="themeColor" type="radio" id="themeColorDark">
        Dark color
      </FormCooseItem>
      <FormCooseItem name="themeColor" type="radio" id="themeColorLight">
        Light color
      </FormCooseItem>
    </StyledInnerWrapper>
    <StyledInnerWrapper>
      <Headline as="h2">Default session</Headline>
    </StyledInnerWrapper>
    <StyledInnerWrapper>
      <Headline as="h2">Your data</Headline>
    </StyledInnerWrapper>
  </SettingsWrapper>
);

export default SettingsTemplate;
