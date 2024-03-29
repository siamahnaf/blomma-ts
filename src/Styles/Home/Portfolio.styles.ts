export default {
    ImageContainer: {
        position: "relative",
        a: {
            textDecoration: "none",
            color: "text.primary",
            display: "block",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "&:hover": {
                img: {
                    transform: "scale(1.1)",
                    transition: "transform .4s cubic-bezier(0,0,.675,.9),-webkit-transform .4s cubic-bezier(0,0,.675,.9)"
                },
                "& .hoveritem": {
                    opacity: 1,
                    transition: "opacity .25s cubic-bezier(.25,.46,.45,.94)",
                    h6: {
                        opacity: 1,
                        transform: "translateY(0)",
                        transition: "transform .7s cubic-bezier(.77,.24,.07,1),opacity .4s,-webkit-transform .7s cubic-bezier(.77,.24,.07,1)",
                    },
                    "& p": {
                        opacity: 1,
                        transform: "translateY(0)",
                        transition: "transform .7s cubic-bezier(1,.01,.07,1) .1s,opacity .4s,-webkit-transform .7s cubic-bezier(1,.01,.07,1) .1s",
                    }
                }
            }
        }
    },
    Image: {
        width: "100%",
        height: "100%",
        display: "block"
    },
    HoverItem: {
        position: "absolute",
        bgcolor: "text.primary",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        opacity: 0,
        transition: "opacity .3s cubic-bezier(.25,.46,.45,.94) .1s",
        textAlign: "center",
        color: "background.default",
        p: "20px",
        boxSizing: "border-box"
    },
    ItemWraper: {
        position: "relative",
        display: "table",
        tableLayout: "fixed",
        height: "100%",
        width: "100%"
    },
    WrappertText: {
        position: "relative",
        display: "table-cell",
        height: "100%",
        width: "100%",
        verticalAlign: "middle"
    },
    titleHolder: {
        overflow: "hidden",
        h6: {
            fontSize: "25px",
            opacity: 0,
            transform: "translateY(-110%)",
            transition: "transform .3s 50ms,opacity .3s,-webkit-transform .3s 50ms"
        }
    },
    CategoryHolder: {
        position: "relative",
        display: "block",
        margin: "4px 0 2px",
        overflow: "hidden",
        "& p": {
            fontSize: "17px",
            opacity: 0,
            transform: "translateY(-110%)",
            transition: "transform .3s 50ms,opacity .3s,-webkit-transform .3s 50ms"
        }
    },
    VectorTwo: {
        position: "absolute",
        right: {
            xxxl: "-15%",
            xxl: "-30%",
            xl: "-50%",
            lg: "-60%",
            md: "-70%",
            smd: "-100%",
            lsm: "-110%",
            sm: "-120%",
            xs: "-180%",
            xxs: "-200%"
        },
        top: {
            xxxl: "-8%",
            xxl: "-16%",
            xl: "-25%",
            lg: "-35%",
            md: "-25%",
            smd: "-18%",
            lsm: "-16%",
            msm: "-5%",
            xxs: "-6%"
        },
        zIndex: -1,
    },
    VectorOne: {
        position: "absolute",
        right: {
            xxxl: "-23%",
            xxl: "-15%",
            xl: "-25%",
            lg: "-30%",
            md: "-42%",
            smd: "-75%",
            msm: "-75%",
            sm: "-110%",
            xs: "-150%",
            xxs: "-210%"
        },
        top: {
            xxxl: "-12%",
            xxl: "-5%",
            xl: "-7%",
            lg: "-12%",
            md: "-3%",
            smd: "-3%",
            lsm: '-1%',
            xxs: "0%"
        },
        zIndex: -1,
    },
    VectorThree: {
        position: "absolute",
        zIndex: -1,
        left: {
            lg: "-32%",
            md: "-50%",
            smd: "-80%",
            lsm: "-110%",
            msm: "-130%",
            sm: "-160%",
            xs: "-200%",
            xxs: "-250%"
        },
        bottom: {
            lg: "-18%",
            md: "-30%",
            smd: "-15%",
            lsm: "-15%",
            xs: "-5%",
            xxs: "-3%"
        }
    },
    VectorInner: {
        opacity: 0,
        transform: "scale(.3)",
        transition: "transform .75s cubic-bezier(.175,.885,.32,1.275),opacity .4s cubic-bezier(.25,.46,.45,.94),-webkit-transform .75s cubic-bezier(.175,.885,.32,1.275)",
        "&.visible": {
            opacity: 1,
            transform: "scale(1)",

        }
    }
}