//Bg
import Bg from "Assets/404-bg.png"

export default {
    Container: {
        background: `url("${Bg}")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top"
    },
    Wrapper: {
        position: "relative",
        display: "table",
        tableLayout: "fixed",
        height: "100%",
        width: "100%"
    },
    Inner: {
        position: "relative",
        display: "table-cell",
        height: "100%",
        width: "100%",
        verticalAlign: "middle",
        px: "20%",
        textAlign: "center"
    },
    Title: {
        fontSize: "60px",
        my: "8px",
        lineHeight: "72px",
        fontWeight: 600
    },
    Description: {
        fontSize: "17px",
        lineHeight: "31px",
        my: "10px"
    },
    Button: {
        mt: "3em",
        mb: "1.2em",
        a: {
            textDecoration: "none",
            color: "text.primary",
            border: (theme: { palette: { text: { primary: string; }; }; }) => `1px solid ${theme.palette.text.primary}`,
            fontWeight: 500,
            fontSize: "15px",
            p: "15px 42px",
            transition: ".4s cubic-bezier(.25,.46,.45,.94)",
            "&:hover": {
                bgcolor: "text.primary",
                color: "background.default"
            }
        }
    }
}