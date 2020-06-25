import React from 'react';
import styled from 'styled-components';

import PageTemplate from 'templates/PageTemplate';
import Headline from 'components/atoms/Headline/Headline';

import PageTitle from 'components/atoms/PageTitle/PageTitle';
import RadioForm from 'components/molecules/RadioForm/RadioForm';
import { setThemeColor } from 'store/settings/actions';
import { setDefaultCycle } from 'store/cycle/actions';
import { ThemeColor, ThemeColorTypes } from 'store/settings/types';
import { Session, SessionEnum } from 'store/cycle/types';
import { connect, ConnectedProps } from 'react-redux';
import TimeInputBox from 'components/molecules/TimeInputBox/TimeInputBox';

const DefaultTimeBox = styled.div`
  display: flex;

  > label {
    &:first-child {
      margin-right: 20px;
    }

    &:last-child {
      margin-left: 20px;
    }
  }
`;

const StyledHeadline = styled(Headline)`
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-top: 40px;
`;

interface RootState {
  settings: {
    colorTheme: ThemeColor;
  };
  cycle: {
    defaultCycle: Session[];
  };
}

const mapState = (state: RootState) => ({
  colorTheme: state.settings.colorTheme,
  defaultCycle: state.cycle.defaultCycle,
});

const mapDispatch = {
  setThemeColor: (option: ThemeColor) => setThemeColor(option),
  setDefaultCycle: (session: Session[]) => setDefaultCycle(session),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const SettingsPage = ({
  colorTheme,
  defaultCycle,
  setThemeColor,
  setDefaultCycle,
}: PropsFromRedux) => (
  <PageTemplate isSubPage>
    <PageTitle>Settings</PageTitle>
    <Section>
      <StyledHeadline>Theme color</StyledHeadline>
      <RadioForm
        inputs={[
          {
            id: 'dark',
            label: 'Dark',
            type: 'radio',
            name: 'themeColor',
            onChange: () => setThemeColor(ThemeColorTypes.DARK),
            checked: colorTheme === ThemeColorTypes.DARK,
          },
          {
            id: 'light',
            label: 'Light',
            type: 'radio',
            name: 'themeColor',
            onChange: () => setThemeColor(ThemeColorTypes.LIGHT),
            checked: colorTheme === ThemeColorTypes.LIGHT,
          },
        ]}
      />
    </Section>
    <Section>
      <StyledHeadline>Default cycle time</StyledHeadline>
      <DefaultTimeBox>
        <TimeInputBox
          label="session time"
          onChange={(value: number) =>
            setDefaultCycle([
              [
                { type: SessionEnum.ACTION, time: value },
                { type: SessionEnum.REST, time: defaultCycle[0][1].time },
              ],
            ])
          }
          maxValue={60}
          value={defaultCycle[0][0].time}
        />
        <TimeInputBox
          label="rest time"
          onChange={(value: number) =>
            setDefaultCycle([
              [
                { type: SessionEnum.ACTION, time: defaultCycle[0][0].time },
                { type: SessionEnum.REST, time: value },
              ],
            ])
          }
          maxValue={60}
          value={defaultCycle[0][1].time}
        />
      </DefaultTimeBox>
    </Section>
  </PageTemplate>
);

export default connector(SettingsPage);
