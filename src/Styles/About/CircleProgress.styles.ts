export default {
    Container: {
        bgcolor: "primary.creamy",
        height: "100%",
        px: "3.5em"
    },
    Wraper: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "center"
    },
    ProgressBar: {
        color: "text.primary",
        position: "relative",
        "&:after": {
            content: '""',
            border: "2px dotted black",
            width: "100%",
            height: "100%",
            borderRadius: "100%",
            position: "absolute",
            left: "0",
            top: "0"
        }
    },
    ProgressCount: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontWeight: 600,
        fontSize: "25px"
    },
    Title: {
        mt: "25px",
        mb: "14px",
        fontWeight: 600
    },
    Description: {
        fontSize: "15px"
    }
}