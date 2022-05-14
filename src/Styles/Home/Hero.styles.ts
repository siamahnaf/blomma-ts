export default {
    Container: {
        pt: {
            xxxl: "25em",
            xxl: "16em",
            xl: "9em",
            lg: "4.5em",
            smd: "3em",
            lsm: "4em",
            msm: "4.5em",
            sm: "5em",
            xxs: "4em"
        },
        pb: {
            lg: "11em",
            md: "8em",
            smd: "5em",
            lsm: "3em",
            msm: "2.5em",
            sm: "3em",
            xxs: "4em"
        },
        position: "relative"
    },
    Title: {
        fontSize: {
            lg: "115px",
            md: "95px",
            smd: "100px",
            lsm: "90px",
            msm: "80px",
            sm: "70px",
            xs: "65px",
            xxs: "60px"
        },
        fontWeight: 600,
        lineHeight: "0.95em",
        marginBottom: "40px"
    },
    Description: {
        fontSize: "17px",
        mt: "40px",
        mb: "60px"
    },
    Button: {
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
    LikeBox: {
        width: {
            xxxl: "550px",
            xxl: "450px",
            xl: "420px",
            lg: "350px",
            md: "310px"
        },
        m: "0 auto",
        mr: "50px",
        display: {
            md: "block",
            xxs: "none"
        }
    },
    Vector: {
        position: "absolute",
        left: {
            xxxl: "-15%",
            xxl: "-20%",
            xl: "-24%",
            lg: "-26%",
            md: "-40%",
            smd: "-50%",
            lsm: "-60%",
            msm: "-70%",
            sm: "-80%",
            xs: "-110%",
            xxs: "-120%"
        },
        zIndex: -1,
        top: "10%"
    }
}