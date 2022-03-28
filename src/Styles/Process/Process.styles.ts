//Images for Background
import DigitalBg from "Assets/process/digital-bg.jpg";
import MarketingBg from "Assets/process/marketing-bg.jpg";
import VisibleBg from "Assets/process/visible-bg.jpg";

export default {
    Image: {
        width: "100%",
        height: "100%"
    },
    Digital: {
        background: `url("${DigitalBg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        px: "6em"
    },
    Marketing: {
        background: `url("${MarketingBg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        px: "6em"
    },
    Visible: {
        background: `url("${VisibleBg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        px: "6em"
    },
    Wrapper: {
        position: "relative",
        top: "50%",
        color: "background.default",
        transform: "translateY(-50%)"
    },
    Heading: {
        fontSize: "40px",
        fontWeight: 600,
        mb: "20px"
    },
    Line: {
        flex: "0 0 11%",
        height: "1px",
        bgcolor: "background.default",
        mr: "25px",
        mt: "15px"
    },
    Button: {
        mt: "3em",
        mb: "1.2em",
        a: {
            textDecoration: "none",
            color: "background.default",
            border: (theme: { palette: { background: { default: string; }; }; }) => `1px solid ${theme.palette.background.default}`,
            fontWeight: 500,
            fontSize: "15px",
            p: "15px 42px",
            transition: ".4s cubic-bezier(.25,.46,.45,.94)",
            "&:hover": {
                bgcolor: "background.default",
                color: "text.primary"
            }
        }
    }
}