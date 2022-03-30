export default {
    Container: {
        bgcolor: "text.primary",
        color: "background.default",
        py: "6em",
        px: "30%",
        position: "fixed",
        bottom: 0,
        zIndex: -2,
        height: "420px",
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