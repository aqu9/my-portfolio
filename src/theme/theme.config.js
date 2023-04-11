import { mixTheme } from './theme.helper';

/**
 * Theme configuration
 * @param {string} textPrimary
 * @param {string} textSecondary
 * @param {string} textTertiary
 * @param {string} textSuccess
 * @param {string} textWarn
 * @param {string} textError
 * @param {string} textFormLabel
 * @param {string} bgPrimary
 * @param {string} bgSecondary
 * @param {string} bgGradient
 * @param {string} bgBackdrop
 * @param {string} bgSuccess
 * @param {string} bgWarn
 * @param {string} bgError
 * @param {string} primaryFont
 * @param {string} secondaryFont
 * @param {object} fontSize
 * @param {number} fontSize.sm
 * @param {number} fontSize.md
 * @param {number} fontSize.lg
 * @param {number} fontSize.xl
 * @param {number} fontSize.default
 */

const defaultTheme = {
  bgBackdrop: 'rgba(0, 0, 0, 0.6)',
  bgBorder: '#E1E2E7',
  bgError: '#FF3939',
  bgFormFields: '#F0F0FF',
  bgGradient: '#B2FFFF',
  bgLabel: '#868686',
  bgLight: '#EAEFFF',

  bgPrimary: '#0F2972',
  bgSecondary: '#00E6E6',
  bgSuccess: '#01CE6C',
  bgTertiary: '#E7E7F3',
  bgWarn: '#FF9B26',
  fontSize: {
    default: 20,
    lg: 14,
    md: 13,
    sm: 15,
    xl: 16,
  },
  primaryFont: "'Poppins', sans-serif",
  secondaryFont: "'Roboto', sans-serif",
  textError: '#FF3939',
  textFormLabel: '#212529',
  textPrimary: '#0F2972',
  textSecondary: '#00E6E6',

  textSuccess: '#01CE6C',
  textTertiary: '#1A1A35',

  textWarn: '#FF9B26',
};

const theme_1 = {
  bgGradient: '#B2FFFF ',
  bgPrimary: '#0F2972',
  bgSecondary: '#00E6E6',
  primaryFont: "'Poppins', sans-serif",
  textPrimary: '#0F2972',
  textSecondary: '#00E6E6',
};

const theme_2 = {
  bgGradient: '#B2FFFF ',
  bgPrimary: '#0F9FFA',
  bgSecondary: '#B2FFFF',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#0F9FFA',
  textSecondary: '#B2FFFF',
};

const theme_3 = {
  bgGradient: '#B2FFB2 ',
  bgPrimary: '#005D29 ',
  bgSecondary: '#B2FFB2',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#005D29',
  textSecondary: '#B2FFB2',
};

const theme_4 = {
  bgGradient: '#B2FFB2  ',
  bgPrimary: '#00B140',
  bgSecondary: '#B2FFB2',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#00B140',
  textSecondary: '#B2FFB2',
};

const theme_5 = {
  bgGradient: '#FFB2B2',
  bgPrimary: '#E23744',
  bgSecondary: '#FFB2B2',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#E23744',
  textSecondary: '#FFB2B2',
};

const theme_6 = {
  bgGradient: '#FFDFB2',
  bgPrimary: '#FC8019',
  bgSecondary: '#FFDFB2',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#FC8019',
  textSecondary: '#FFDFB2',
};

const theme_7 = {
  bgGradient: '#FFB2F9',
  bgPrimary: '#FF5599',
  bgSecondary: '#FFB2F9',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#FF5599',
  textSecondary: '#FFB2F9',
};

const theme_8 = {
  bgGradient: '#FFDCB2',
  bgPrimary: '#4E3122',
  bgSecondary: '#FFDCB2',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#4E3122',
  textSecondary: '#FFDCB2',
};

const theme_9 = {
  bgGradient: '#FFFEB2',
  bgPrimary: '#F8C200',
  bgSecondary: '#FFFEB2',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#F8C200',
  textSecondary: '#FFFEB2',
};

const theme_10 = {
  bgGradient: '#E8C0FE',
  bgPrimary: '#A246F3',
  bgSecondary: '#02A7F2',
  primaryFont: "'Roboto', sans-serif",
  textPrimary: '#A246F3',
  textSecondary: '#02A7F2',
};

const themes = {
  theme_1,
  theme_10,
  theme_2,
  theme_3,
  theme_4,
  theme_5,
  theme_6,
  theme_7,
  theme_8,
  theme_9,
};

const toogleTheme = (themeName = 'theme_1', newThemeConfig = {}) => {
  themes[themeName] = {
    ...themes[themeName],
    ...newThemeConfig,
  };

  return mixTheme(themes[themeName], defaultTheme);
};

export default toogleTheme;
