export default {
    Container: {
        "&:hover": {
            "& .icon-src": {
                opacity: 0,
                transition: "none"
            },
            "& .icon-hover": {
                opacity: 1,
            }
        }
    },
    Images: {
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .icon-src": {
            width: "auto",
            opacity: 1,
            transition: "opacity 1s cubic-bezier(.25,.46,.45,.94)"
        },
        "& .icon-hover": {
            position: "absolute",
            left: "50%",
            width: "auto",
            opacity: 0,
            transform: "translateX(-50%)"
        }
    },
    Title: {
        fontSize: "25px",
        fontWeight: 600,
        mt: "25px"
    },
    Description: {
        fontSize: "17px",
        mt: "15px",
        fontWeight: 400
    }
}