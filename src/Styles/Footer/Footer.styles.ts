export default {
    Container: {
        bgcolor: "text.primary",
        color: "background.default",
        py: "6em",
        px: {
            md: "30%",
            smd: "20%",
            lsm: "10%",
            msm: "8%",
            xs: "3%",
            xxs: "2%"
        },
        position: "fixed",
        bottom: 0,
        zIndex: -2,
        height: {
            sm: "420px",
            xs: "460px",
            xxs: "470px"
        },
        textAlign: "center",
    },
    Text: {
        fontSize: "15px",
        color: "primary.grey",
        py: "25px"
    },
    Copytright: {
        color: "primary.grey",
        fontSize: "15px"
    },
    Nav: {
        mb: "25px",
        a: {
            mx: "10px",
            color: "primary.grey",
            textDecoration: "none",
            fontSize: "15px",
            transition: ".1s cubic-bezier(.25,.46,.45,.94)",
            "&:hover": {
                color: "background.default"
            }
        }
    }
}