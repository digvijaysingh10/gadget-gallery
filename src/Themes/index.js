import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { themeOptions } from "./typography";

const baseOptions = {
  palette: {
    primary: {
      main: "#fff", // Customize this color as needed
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.60)", // Customize this color as needed
    },
    background: {
      main: "#080031", // Customize this color as needed
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.60)",
    },
    // Add more color definitions as needed
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(122, 105, 254, 0.25)",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "240px",
          backgroundColor: "#e3e0c7 !important",
          padding: "20px",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "30px",
          color: "#FFFFFF !important",
          padding: "12px",
          width: "50px",
          height: "50px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#000",
          "&.Mui-selected": {
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            background: "#7A69FE",
            color: "#FFF",
          },
          "&.Mui-selected:hover": {
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            background: "#7A69FE",
            color: "#FFF",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: "0px",
          border: "none",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: { color: "#222" },
        colorSecondary: {
          "&.Mui-focused": {
            color: "#222",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        inputMultiline: {
          padding: "1px !important",
        },
        root: {
          borderBottom: "none !important",
          borderRadius: "5px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            boxShadow: "none",
          },
        },
        notchedOutline: {
          background: "rgba(0, 0, 0, 0.05)",
        },
        input: {
          borderRadius: "5px",
          color: "#000",
          padding: "14px 14px",
          fontSize: "12px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#000",
          },
          "&:-internal-autofill-selected": {
            color: "#000",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          padding: "20px",
          width: "100%",
        },
        elevation1: {
          background: "#FFF",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "none",
          border: "0.5px solid rgba(0, 0, 0, 0.25)",
        },
        elevation2: {
          background: "#FFF",
          borderRadius: "25px",
          padding: "15px",
          boxShadow: "none",
        },
        elevation3: {
          padding: "25px",
          background: "#fff",
          borderRadius: "20px",
          position: "relative",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
          "@media(max-width:768px)": {
            padding: "15px",
          },
        },
        root: {
          color: "#fff",
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 99999,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          alignItems: "self-start",
        },
        gutters: {
          paddingLeft: 0,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.40)",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "4px",
          fontSize: "12px",
        },
        colorSecondary: {
          "&.Mui-checked": { color: "#000" },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          paddingBottom: "0",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
/*         MuiOutlinedInput:{
          color: "#000 !important",
          border:"1px solid #f9f9f9",
        }, */
        input: {
          fontSize: 16,
          color: "#000 !important",
          padding: "10px",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
      styleOverrides: {
        containedSecondary: {
          color: "#fff",
          padding: "10px 30px",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "400",
          borderRadius: "10px !important",
          background: "#dddddd",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          whiteSpace: "pre",
          boxShadow: "none",
          "&:hover": {
            color: "#000",
            background: "#e3e0c7",
            border: "1px solid rgba(255, 255, 255, 0.60)",
          },
          "@media (max-width: 780px)": {
            padding: "10px 20px",
          },
        },
        containedPrimary: {
          color: "#000",
          padding: "10px 30px",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "400",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.60)",
          background: "#e3e0c7",
          whiteSpace: "pre",
          "&:hover": {
            boxShadow: "none",
            color: "#fff",
            background: "#dddddd",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          },
        },
        text: {
          color: "#000",
          fontSize: "16px",
          borderRadius:"0px !important",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: "0",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none !important",
          cursor: "pointer",
        },
      },
    },
  },
};

export const createCustomTheme = (config = {}) => {
  let theme = createTheme({ ...baseOptions, ...themeOptions });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
