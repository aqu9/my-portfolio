import _ from 'lodash';
import propTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Pane } from 'tweakpane';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import componentsOverrides from './overrides/theme.overrides';
import themeBreakpoints from './theme.breakpoints';
import toogleTheme from './theme.config';
import themePalette from './theme.palette';
import themeTypography from './theme.typography';

const MUIThemeProvider = ({ children }) => {
  const themeIdx = useRef('theme_1');
  const [pane, setPane] = useState(null);
  const [currentThemData, setCurrentThemData] = useState({});

  const generateTheme = (themeIdx, newConfig = {}, isNewTheme = false) => {
    const themeData = toogleTheme(themeIdx, newConfig);

    const themeConfig = createTheme({
      breakpoints: themeBreakpoints,
      palette: themePalette(themeData),
    });

    themeConfig.typography = themeTypography(themeConfig);
    themeConfig.components = componentsOverrides(themeConfig);

    if (isNewTheme) {
      setCurrentThemData(themeData);
    }

    return themeConfig;
  };

  const [currentTheme, setCurrentTheme] = useState(() => generateTheme());

  useEffect(() => {
    setPane(new Pane());

    return () => {
      pane?.dispose();
    };
  }, []);

  useEffect(() => {
    if (!pane) {
      return;
    }

    const themeFolder = pane.addFolder({
      expanded: true,
      title: 'Theme',
    });

    themeFolder
      .addInput({ currentTheme: themeIdx.current }, 'currentTheme', {
        options: [
          { text: 'blue_theme', value: 'theme_1' },
          { text: 'light_blue_theme', value: 'theme_2' },
          { text: 'dark_green_theme', value: 'theme_3' },
          { text: 'light_green_theme', value: 'theme_4' },
          { text: 'red_theme', value: 'theme_5' },
          { text: 'orange_theme', value: 'theme_6' },
          { text: 'pink_theme', value: 'theme_7' },
          { text: 'brown_theme', value: 'theme_8' },
          { text: 'yellow_theme', value: 'theme_9' },
          { text: 'violet(TMIBASL)_theme', value: 'theme_10' },
        ],
      })
      .on('change', (event) => {
        themeIdx.current = event.value;
        setCurrentTheme(generateTheme(event.value, {}, true));
      });
  }, [pane]);

  useEffect(() => {
    if (!pane || !currentThemData) {
      return;
    }

    const themeData = new Map(Object.entries(currentThemData));

    const currThemeFolder = pane.addFolder({
      expanded: true,
      title: 'Current Theme Config',
    });

    const colorConfig = new Map();

    themeData.forEach((value, key) => {
      if (value[0] === '#' || value[0] === 'r') {
        colorConfig.set(key, value);
      }
    });

    const PARAMS = Object.fromEntries(colorConfig);

    colorConfig.forEach((value, key) => {
      currThemeFolder
        .addInput(PARAMS, key, {
          view: 'color',
        })
        .on(
          'change',
          _.debounce((event) => {
            setCurrentTheme(
              generateTheme(themeIdx.current, {
                [event.presetKey]: event.value,
              })
            );
          }, 500)
        );
    });

    if (themeData.get('primaryFont')) {
      currThemeFolder
        .addInput(
          { primaryFont: themeData.get('primaryFont') },
          'primaryFont',
          {
            options: [
              { text: 'Poppins', value: "'Poppins', sans-serif" },
              { text: 'Roboto', value: "'Roboto', sans-serif" },
            ],
          }
        )
        .on('change', (event) => {
          setCurrentTheme(
            generateTheme(themeIdx.current, {
              primaryFont: event.value,
            })
          );
        });
    }

    return () => {
      currThemeFolder?.dispose();
    };
  }, [pane, currentThemData]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;

MUIThemeProvider.propTypes = {
  children: propTypes.node,
};

MUIThemeProvider.defaultProps = {
  children: null,
};
