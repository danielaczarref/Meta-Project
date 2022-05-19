export default {
  color: {
    brand: {
      primary: {
        base: '#1D5AF5',
        lightest: '#78E3FD',
        dark: '#0A1DC1',
      },
      secondary: {
        base: '#1D5AF5',
      },
      neutral: {
        white: '#FFFFFF',
        dark: '#C8CED2',
        base: '#DEDEDE',
        darkest: '#808182',
      }
    },
    support: {
      highlight1: {
        dark: '#A32122',
        base: '#FC5759',
        light: '#FFD6D7'
      },
    }
  },
  border: {
    width: {
      none: '0px',
      hairline: '1px',
      thin: '2px',
      thick: '4px',
    },
    radius: {
      none: '0px',
      sm: '4px',
      circular: '50%',
    }
  },
  opacity: {
    medium: '0.32',
  },
  font: {
    1: {
      font: "Roboto"
    },
    size: {
      lg: '12px',
      xlg: '14px',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
  },
  size: {
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '96px'
  },
  spacing: {
    inline: {
      nano: '8px',
    },
    squish: {
      nano: '8px 16px',
      xs: '16px 24px',
    }
  }
} as const
