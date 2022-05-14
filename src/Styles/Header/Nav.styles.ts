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
            width: {
                lg: "435px",
                smd: "400px",
                lsm: "350px",
                msm: "330px",
                sm: "320px",
                xs: "300px",
                xxs: "250px"
            },
            bgcolor: "primary.main",
            p: {
                smd: "20px 80px",
                lsm: "10px 20px",
                msm: "8px 15px",
                sm: "6px 12px",
                xs: "5px 10px",
                xxs: "3px 8px"
            },
            textAlign: "center"
        }
    }
}