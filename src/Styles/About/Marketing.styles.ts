export default {
    Image: {
        width: "100%",
        height: "100%"
    },
    Content: {
        bgcolor: "primary.creamy",
        height: "100%",
        px: {
            lg: "6em",
            md: "2em",
            lsm: "3em",
            msm: "2em",
            sm: "1.5em",
            xxs: "1em"
        },
        py: {
            md: 0,
            lsm: "5em",
            msm: "4em",
            sm: "3em",
            xxs: "2em"
        }
    },
    Wrapper: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)"
    },
    Heading: {
        fontSize: {
            lg: "40px",
            msm: "35px",
            sm: "30px",
            xs: "28px",
            xxs: "25px"
        },
        fontWeight: 600,
        mb: "20px"
    },
    Line: {
        flex: "0 0 11%",
        height: "1px",
        bgcolor: "text.primary",
        mr: "25px",
        mt: "15px"
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