export default {
    Main: {
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            img: {
                transform: "scale(1.06)",
                transition: "transform .4s cubic-bezier(.215,.61,.355,1),-webkit-transform .4s cubic-bezier(.215,.61,.355,1)"
            },
            "& .container-hover": {
                opacity: 1,
                "& .wraper-hover": {
                    "&:after": {
                        transform: "scale(1)",
                        opacity: 1,
                        transition: "transform .3s cubic-bezier(.86,0,.07,1),opacity .2s,-webkit-transform .3s cubic-bezier(.86,0,.07,1)"
                    },
                    "& .inner-hover": {
                        opacity: 1,
                        transition: "opacity .45s cubic-bezier(.25,.46,.45,.94)"
                    }
                }
            }
        }
    },
    Image: {
        width: "100%",
        height: "100%",
        display: "block",
        transform: "scale(1.01)"
    },
    Container: {
        position: "absolute",
        bgcolor: "primary.grey_second",
        width: "100%",
        top: "0",
        left: "0",
        height: "100%",
        opacity: 0,
        transition: "opacity .3s"
    },
    Wrapper: {
        position: "absolute",
        width: "80%",
        pt: "80%",
        height: "0",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "&:after": {
            content: "''",
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            borderRadius: "50%",
            bgcolor: "text.primary",
            transform: "scale(.6)",
            opacity: 0,
            zIndex: -1
        }
    },
    Inner: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        p: "20px 30px 10px",
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxSizing: "border-box",
        textAlign: "center",
        opacity: 0
    },
    Name: {
        fontSize: "25px",
        fontWeight: 600
    },
    Job: {
        my: "2px"
    },
    List: {
        borderTop: (theme: { palette: { background: { default: any; }; }; }) => `2px dotted ${theme.palette.background.default}`,
        width: "70%",
        pt: "20px",
        m: "10px 0 0",
        justifyContent: "center",
        li: {
            width: "unset",
            m: "0px 8px",
            a: {
                color: "background.default",
                textDecoration: "none",
                fontSize: "15px"
            }
        }
    }
}