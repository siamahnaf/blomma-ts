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
        a: {
            textDecoration: "none",
            color: "text.primary",
            h4: {
                fontSize: "25px",
                fontWeight: 600
            }
        }
    },
    Description: {
        fontSize: "15px",
        mt: "23px",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "3",
        overflow: "hidden",
        display: "-webkit-box"
    },
    Button: {
        mt: "17px",
        mb: "4em",
        a: {
            position: "relative",
            display: "inline-block",
            lineHeight: "25px",
            fontSize: "14px",
            textDecoration: "none",
            color: "text.primary",
            transition: ".4s cubic-bezier(.25,.46,.45,.94)",
            verticalAlign: "middle",
            textTransform: "none",
            padding: "0 !important",
            "&:before": {
                content: "'—'",
                display: "inline-block",
                pr: "3px"
            },
            span: {
                fontWeight: 600,
                display: "inline-block",
                transition: "transform .1s cubic-bezier(.25,.46,.45,.94),-webkit-transform .1s cubic-bezier(.25,.46,.45,.94)"
            },
            "&:hover": {
                span: {
                    transform: "translateX(10px)"
                }
            }
        }
    }
}