export default {
    Image: {
        ml: {
            xxl: "0px",
            xl: "-25px",
            lg: "-45px"
        }
    },
    Content: {
        position: "absolute",
        top: "50%",
        width: "100%",
        transform: "translateY(-56%)"
    },
    Container: {
        bgcolor: "background.default",
        p: {
            xxxl: "200px 120px",
            xxl: "120px 80px",
            xl: "100px 75px",
            lg: "60px 70px"
        }
    },
    Heading: {
        fontSize: "40px",
        fontWeight: 600,
        mb: "20px"
    },
    Line: {
        flex: "0 0 11%",
        height: "1px",
        background: "black",
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
    },
    Vector: {
        position: "absolute",
        zIndex: -1,
        right: {
            xxxl: "-4%",
            xxl: "-10%",
            xl: "-12%",
            lg: "-4%"
        },
        top: "-10%"
    },
    VectorInner: {
        opacity: 0,
        transform: "scale(.3)",
        transition: "transform .75s cubic-bezier(.175,.885,.32,1.275),opacity .4s cubic-bezier(.25,.46,.45,.94),-webkit-transform .75s cubic-bezier(.175,.885,.32,1.275)",
        "&.visible": {
            opacity: 1,
            transform: "scale(1)",

        }
    }
}