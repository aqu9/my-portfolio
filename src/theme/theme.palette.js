const themePalette = (themeConfig) => {
  const COMMON = {
    black: '#000000',
    white: '#FFFFFF',
  };

  const TEXT = {
    error: themeConfig.textError,
    label: themeConfig.textFormLabel,
    primary: themeConfig.textPrimary,
    secondary: themeConfig.textSecondary,
    success: themeConfig.textSuccess,
    tertiary: themeConfig.textTertiary,
    warn: themeConfig.textWarn,
  };

  const BACKGROUND = {
    backdrop: themeConfig.bgBackdrop,
    border: themeConfig.bgBorder,
    error: themeConfig.bgError,
    formFields: themeConfig.bgFormFields,
    gradient: themeConfig.bgGradient,
    label: themeConfig.bgLabel,
    primary: themeConfig.bgPrimary,
    secondary: themeConfig.bgSecondary,
    success: themeConfig.bgSuccess,
    tertiary: themeConfig.bgTertiary,
    warn: themeConfig.bgWarn,
  };

  const FONTS = {
    primary: themeConfig.primaryFont,
    secondary: themeConfig.secondaryFont,
  };

  const FONTSIZE = {
    default: themeConfig.fontSize.default,
    lg: themeConfig.fontSize.lg,
    md: themeConfig.fontSize.md,
    sm: themeConfig.fontSize.sm,
    xl: themeConfig.fontSize.xl,
  };

  const PRIMARY = {
    dark: themeConfig.textPrimary,
    light: themeConfig.textPrimary,
    main: themeConfig.textPrimary,
  };

  const ERROR = {
    main: themeConfig.textError,
  };

  return {
    background: BACKGROUND,
    common: COMMON,
    error: ERROR,
    font: FONTS,
    fontSize: FONTSIZE,
    primary: PRIMARY,
    text: TEXT,
  };
};

export default themePalette;
