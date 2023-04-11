export const flexBox = (
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center'
) => {
  return {
    alignItems: alignItems,
    display: 'flex',
    flexDirection: flexDirection,
    justifyContent: justifyContent,
  };
};

export const size = (width = 'fit-content', height = 'fit-content') => {
  return {
    height: height,
    width: width,
  };
};

export const clampWidth = (
  minWidth = '0%',
  width = 'fit-content',
  maxWidth = '100%'
) => {
  return {
    maxWidth: maxWidth,
    minWidth: minWidth,
    width: width,
  };
};

export const clampHeight = (
  minHeight = '0%',
  height = 'fit-content',
  maxHeight = '100%'
) => {
  return {
    height: height,
    maxHeight: maxHeight,
    minHeight: minHeight,
  };
};

export const fonts = (
  fontSize = '1rem',
  fontWeight = '500',
  color = '#0F2972'
) => {
  return {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    margin: '0rem',
  };
};

export const scrollbar = (props) => {
  const config = {
    margin: props?.margin ?? '8px',
    thumbBgColor: props?.thumbBgColor ?? '#8F8F8F',
    trackBgColor: props?.trackBgColor ?? 'transparent',
    verticalScrollBar: props?.horizontalScrollBar ?? true,
    width: props?.width ?? '4px',
  };

  return {
    '&::-webkit-scrollbar': {
      width: config.width,
    },
    '&::-webkit-scrollbar-thumb': {
      background: config.thumbBgColor,
      borderRadius: '999px',
    },

    '&::-webkit-scrollbar-track': {
      background: config.trackBgColor,
      margin: config.margin,
    },

    overflowX: config.verticalScrollBar ? 'hidden' : 'auto',

    overflowY: config.verticalScrollBar ? 'auto' : 'hidden',
  };
};
