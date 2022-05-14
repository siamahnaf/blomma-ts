export default {
    Content: {
        position: {
            smd: "absolute",
            xxs: "unset"
        },
        top: "50%",
        width: "100%",
        transform: {
            smd: "translateY(-50%)",
            xxs: "unset"
        }
    },
    Container: {
        bgcolor: "background.default",
        mt: {
            lg: 0,
            smd: "50%",
            xxs: '0'
        },
        mx: {
            lg: 0,
            md: "15%",
            smd: "10%",
            xxs: "0"
        },
        p: {
            xxxl: "280px 120px",
            xxl: "200px 100px",
            xl: "120px 80px",
            md: "85px 70px",
            smd: "75px 60px",
            lsm: "65px 50px",
            msm: "60px 45px",
            sm: "55px 40px",
            xs: "50px 35px",
            xxs: "20px 20px"
        }
    },
    ImageBg: {
        width: {
            lg: "62%",
            md: "92%",
            smd: "100%",
            xxs: "100%"
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
        bottom: "-35%",
        left: {
            smd: "-15%",
            lsm: "-30%",
            msm: "-50%",
            sm: "-70%",
            xs: "-80%",
            xxs: "-100%"
        }
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