import React from "react";
import PageTemplate from "templates/PageTemplate";
import Input from "components/atoms/Input/Input";
import Label from "components/atoms/Label/Label";
import PageTitle from "components/atoms/PageTitle/PageTitle";
import RadioForm from "components/molecules/RadioForm/RadioForm";
import { setThemeColor } from "store/settings/actions";
import { ThemeColor, ThemeColorTypes } from "store/settings/types";
import { connect, ConnectedProps } from "react-redux";

interface RootState {
  settings: {
    colorTheme: ThemeColor;
  };
}

const mapState = (state: RootState) => ({
  colorTheme: state.settings.colorTheme,
});

const mapDispatch = {
  setThemeColor: (option: ThemeColor) => setThemeColor(option),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const SettingsPage = ({ colorTheme, setThemeColor }: PropsFromRedux) => (
  <PageTemplate isSubPage>
    <PageTitle>Settings</PageTitle>

    <RadioForm
      inputs={[
        {
          id: "dark",
          label: "Dark",
          type: "radio",
          name: "themeColor",
          onChange: () => setThemeColor(ThemeColorTypes.DARK),
          checked: colorTheme === ThemeColorTypes.DARK,
        },
        {
          id: "light",
          label: "Light",
          type: "radio",
          name: "themeColor",
          onChange: () => setThemeColor(ThemeColorTypes.LIGHT),
          checked: colorTheme === ThemeColorTypes.LIGHT,
        },
      ]}
    />
    <Label htmlFor="projectName">
      Project
      <Input id="projectName" placeholder="Choose project" type="number" />
    </Label>
    <Label htmlFor="projectName">
      Project
      <Input
        id="projectName"
        placeholder="Choose project"
        type="time"
        step="1"
        min="00:00:00"
        max="00:60:00"
      />
    </Label>
  </PageTemplate>
);

export default connector(SettingsPage);
