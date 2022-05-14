export default {
    CloseIcon: {
        position: "absolute",
        right: {
            smd: "-18%",
            xxs: "0%"
        },
        top: "5%",
        button: {
            bgcolor: "text.primary",
            color: "background.default",
            fontSize: "25px",
            p: "4px"
        }
    },
    Logo: {
        width: "130px",
        mt: "3.5em"
    },
    ListNav: {
        my: "2.5em",
        mx: "1.1em",
        display: {
            lg: "none",
            xxs: "block"
        },
        li: {
            my: "5px",
            a: {
                textDecoration: "none",
                color: "text.primary",
                fontSize: "16px",
                position: "relative",
                "&:after": {
                    content: '""',
                    height: "2px",
                    position: "absolute",
                    left: "0px",
                    bottom: "-1px",
                    bgcolor: "text.primary",
                    right: "0px",
                    opacity: 0,
                    transition: "0.15s ease"
                },
                "&:hover, &.active": {
                    "&:after": {
                        opacity: 1
                    }
                }
            }
        }
    },
    Description: {
        fontSize: "16px",
        mt: "1.8em"
    },
    Social: {
        mt: "35px",
        justifyContent: "center",
        textAlign: "center",
        li: {
            width: "unset",
            margin: "0 5px",
            a: {
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                color: "background.default",
                fontSize: "20px",
                transition: ".1s cubic-bezier(.25,.46,.45,.94)"
            }
        }
    }
}