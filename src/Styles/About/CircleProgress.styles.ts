export default {
    Container: {
        bgcolor: "primary.creamy",
        height: "100%",
        px: {
            lg: "3.5em",
            md: "1em",
            smd: "2em",
            lsm: "1.5em",
            xxs: "1em"
        },
        py: {
            lg: "0",
            md: "1em",
            smd: "3em",
            msm: "2em",
            sm: "3em",
            xxs: "2em"
        },
        mt: {
            sm: 0,
            xxs: "4em"
        }
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