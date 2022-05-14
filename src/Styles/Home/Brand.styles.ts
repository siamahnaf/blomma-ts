export default {
    Image: {
        width: {
            md: "unset",
            xxs: "100%"
        },
        ml: {
            xxl: "0px",
            xl: "-25px",
            lg: "-45px",
            md: "-40px",
            xxs: "0px"
        }
    },
    Content: {
        position: {
            smd: "absolute",
            xxs: "unset"
        },
        top: "50%",
        width: "100%",
        transform: {
            smd: "translateY(-56%)",
            xxs: "unset"
        }
    },
    Container: {
        bgcolor: "background.default",
        mt: {
            lg: 0,
            smd: "50%",
            xxs: "0%"
        },
        mx: {
            lg: 0,
            md: "15%",
            smd: "12%",
            xxs: "0%"
        },
        p: {
            xxxl: "200px 120px",
            xxl: "120px 80px",
            xl: "100px 75px",
            md: "60px 70px",
            smd: "50px 60px",
            lsm: "40px 50px",
            msm: "35px 45px",
            sm: "30px 40px",
            xs: "25px 35px",
            xxs: "10px 15px"
        }
    },
    Heading: {
        fontSize: {
            sm: "40px",
            xs: "30px",
            xxs: "25px"
        },
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
            lg: "-4%",
            md: "-18%",
            smd: "-25%",
            lsm: "-30%",
            msm: "-40%",
            sm: "-50%",
            xs: "-70%",
            xxs: "-100%"
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