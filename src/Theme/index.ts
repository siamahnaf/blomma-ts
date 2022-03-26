import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColorOptions {
        main?: string;
        grey?: string;
    }
    interface BreakpointOverrides {
        xs: true;
        xxs: true;
        sm: true;
        msm: true;
        lsm: true;
        smd: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}

const theme = createTheme({
    typography: {
        fontFamily: "Poppins"
    },
    palette: {
        text: {
            primary: "#000000", //Default Text Color
        },
        background: {
            default: "#FFFFFF" //Default Background Color
        },
        primary: {
            main: "#FFD332", //Others Main Color
            grey: "#a3a3a3", //Grey Text Color
        }
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices ---- Defualt BreakPoints
            sm: 480, // Small Devices ---- Default BreakPoints
            msm: 576, // Medium Small Medium Devices
            lsm: 640, // Large Small Medium Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices ---- Default BreakPoints
            lg: 1200, // Large Devices  ---- Default BreakPoints
            xl: 1536, // Extra Large Devices ---- Default BreakPoints
            xxl: 1980 // Double Extra Large Devices
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '6%',
                    paddingRight: '6%'
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Poppins"
                },
            },
        },
    },
});
export default theme;