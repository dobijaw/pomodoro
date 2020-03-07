import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { themeDark, themeLight, themeColor } from 'theme/mainTheme';
import { connect } from 'react-redux';

const MainTemplate = ({ children, colorTheme }) => {
  const whatThemeIs = () => {
    switch (colorTheme) {
      case 'dark':
        return themeDark;
      case 'light':
        return themeLight;
      case 'color':
        return themeColor;
    }
  };

  return (
    <>
      <ThemeProvider theme={whatThemeIs()}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({
  colorTheme: state.colorTheme,
});

export default connect(mapStateToProps)(MainTemplate);
