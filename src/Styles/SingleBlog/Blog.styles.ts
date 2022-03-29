export default {
    Time: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "top",
        p: "0 14px 0 0",
        "& p": {
            color: "primary.textGrey",
            fontSize: "13px"
        },
        "&:after": {
            content: "'|'",
            position: "absolute",
            top: "-3px",
            right: "0",
            color: "primary.textGrey"
        }
    },
    Category: {
        display: "inline-block",
        verticalAlign: "top",
        p: "0 14px 0 0",
        pl: "11px",
        "& p": {
            color: "primary.textGrey",
            fontSize: "13px"
        },
    },
    Title: {
        textDecoration: "none",
        color: "text.primary",
        h4: {
            fontSize: "25px",
            fontWeight: 600
        }
    },
    Description: {
        fontSize: "15px",
        mt: "23px"
    }
}