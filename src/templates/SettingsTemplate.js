import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';
import FormCooseItem from 'components/molecules/FormChooseItem/FormChooseItem';
import FormItem from 'components/molecules/FormItem/FormItem';
import { connect } from 'react-redux';
import { changeTheme, changeDefaultCycle } from 'actions';

const SettingsWrapper = styled.div`
  margin: 0;
`;

const StyledInnerWrapper = styled.section`
  margin-bottom: 60px;
`;

const StyledThemeWrapper = styled.div`
  display: flex;

  > div {
    margin-right: 60px;
  }
`;

const StyledSessionWrapper = styled.div`
  display: flex;
  > div {
    &:first-of-type {
      margin-right: 20px;
    }

    &:last-of-type {
      margin-left: 20px;
    }
  }
`;

const StyledDataWrapper = styled.div`
  display: flex;
`;

const SettingsTemplate = ({
  color,
  colorTheme,
  changeDefaultCycleInState,
  defaultSessionTime,
  defaultBreakTime,
}) => {
  const [curRadio, setCurRadio] = useState(color);
  colorTheme(curRadio);

  const handleCycleTimeChange = e => {
    changeDefaultCycleInState(e.target.name, e.target.value);
  };

  return (
    <SettingsWrapper>
      <StyledInnerWrapper>
        <Headline as="h2">Pomodoro theme</Headline>
        <StyledThemeWrapper>
          <FormCooseItem
            name="themeColor"
            type="radio"
            id="themeColorDark"
            isChecked={curRadio === 'dark'}
            handleOnChange={() => setCurRadio('dark')}
          >
            Dark color
          </FormCooseItem>
          <FormCooseItem
            name="themeColor"
            type="radio"
            id="themeColorLight"
            isChecked={curRadio === 'light'}
            handleOnChange={() => setCurRadio('light')}
          >
            Light color
          </FormCooseItem>
          <FormCooseItem
            name="themeColor"
            type="radio"
            id="themeColorColor"
            isChecked={curRadio === 'color'}
            handleOnChange={() => setCurRadio('color')}
          >
            Color
          </FormCooseItem>
        </StyledThemeWrapper>
      </StyledInnerWrapper>
      <StyledInnerWrapper>
        <Headline as="h2">Default session</Headline>
        <StyledSessionWrapper>
          <FormItem
            handleOnChange={handleCycleTimeChange}
            label="session time"
            type="time"
            step="1"
            min="00:00:00"
            max="20:00:00"
            inputName="defaultSessionTime"
            inputValue={defaultSessionTime}
          />
          <FormItem
            handleOnChange={handleCycleTimeChange}
            label="break time"
            type="time"
            step="1"
            min="00:00:00"
            max="20:00:00"
            inputName="defaultBreakTime"
            inputValue={defaultBreakTime}
          />
        </StyledSessionWrapper>
      </StyledInnerWrapper>
      <StyledInnerWrapper>
        <Headline as="h2">Your data</Headline>
        <StyledDataWrapper>
          <FormItem label="name" />
          <FormItem label="email" />
        </StyledDataWrapper>
        <StyledDataWrapper>
          <FormItem label="old password" type="password" />
          <FormItem label="new password" type="password" />
          <FormItem label="repeat new password" type="password" />
        </StyledDataWrapper>
      </StyledInnerWrapper>
    </SettingsWrapper>
  );
};

const mapStateToProps = state => {
  return {
    color: state.colorTheme,
    defaultSessionTime: state.defaultSessionTime,
    defaultBreakTime: state.defaultBreakTime,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    colorTheme: color => dispatch(changeTheme(color)),
    changeDefaultCycleInState: (type, time) => dispatch(changeDefaultCycle(type, time)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTemplate);
