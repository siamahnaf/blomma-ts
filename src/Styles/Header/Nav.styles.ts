export default {
    List: {
        justifyContent: "right",
        li: {
            width: "unset",
            marginLeft: "15px",
            a: {
                textDecoration: "none",
                p: "3px 10px",
                fontSize: "15px",
                fontWeight: 600,
                position: "relative",
                "&:after": {
                    content: '""',
                    height: "2px",
                    position: "absolute",
                    left: "10px",
                    bottom: "0",
                    right: "10px",
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
    Bar: {
        color: "white",
        svg: {
            line: {
                "&:nth-of-type(2)": {
                    transformOrigin: "0 0",
                    transition: "transform .4s cubic-bezier(1,.01,.07,1) .1s,-webkit-transform .4s cubic-bezier(1,.01,.07,1) .1s"
                },
                "&:last-of-type": {
                    transformOrigin: "0 0",
                    transition: "transform .4s cubic-bezier(1,.01,.07,1),-webkit-transform .4s cubic-bezier(1,.01,.07,1)"
                }
            }
        },
        "&:hover": {
            svg: {
                line: {
                    "&:nth-of-type(2), &:last-of-type": {
                        transformOrigin: "100% 0",
                        transform: "scaleX(0)"
                    }
                }
            }
        }
    },
    Drawer: {
        "& .MuiPaper-root": {
            width: "435px",
            bgcolor: "primary.main",
            p: "20px 80px",
            textAlign: "center"
        }
    }
}