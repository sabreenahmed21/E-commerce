const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#eeeeee",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    400: "#4d547d",
    900: "#00092f",
  },
  secondary: {
    0: "#415a77",
    100: "#1b263b",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ?  {
          // palette values for light mode
          primary: {
            ...tokensLight.primary,
            main: tokensDark.grey[50],
            light: tokensDark.grey[100],
          },
          secondary: {
            ...tokensLight.secondary,
            main: tokensDark.secondary[0],
          },
          grey: {
            ...tokensLight.grey,
            main: tokensDark.grey[500],
            light: tokensDark.grey[200],
          },
          background: {
            default: tokensDark.grey[10],
            alt: tokensDark.grey[0],
          },
          text: {
            light: '#2b3445',
            main: "#1b263b"
          }
        }
        :{
          // palette values for dark mode
          primary: {
            ...tokensDark.primary,
            main: tokensDark.primary[400],
            light: tokensDark.primary[400],
          },
          secondary: {
            ...tokensDark.secondary,
            main: tokensDark.secondary[100],
          },
          grey: {
            ...tokensDark.grey,
            main: tokensDark.grey[500],
            light: tokensDark.grey[900],
          },
          background: {
            default: tokensDark.primary[900],
            alt: tokensDark.grey[1000],
          },
          text: {
            light: '#fff',
            main: "#1b263b"
          }
        }),
    },
  };
};
