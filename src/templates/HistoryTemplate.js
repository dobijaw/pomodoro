import React from 'react';
import styled from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';
import FormCooseItem from 'components/molecules/FormChooseItem/FormChooseItem';

const StyledForm = styled.div`
  display: flex;

  > div {
    margin-right: 60px;
  }
`;

const HistoryTemplate = () => (
  <div>
    <Headline as="h2">Pomodoro History</Headline>
    <StyledForm>
      <FormCooseItem name="themeColor" type="radio" id="themeColorDark">
        By Date
      </FormCooseItem>
      <FormCooseItem name="themeColor" type="radio" id="themeColorLight">
        By projects
      </FormCooseItem>
    </StyledForm>
  </div>
);

export default HistoryTemplate;
