export default {
    StickyHeader: {
        py: {
            xxxl: "40px",
            xxl: "37px",
            xl: "35px",
            md: "32px",
            smd: "28px",
            lsm: "25px",
            sm: "20px",
            xs: "18px",
            xxs: "16px"
        },
        height: {
            md: "102px",
            smd: "85px",
            lsm: "80px",
            sm: "76px",
            xs: "70px",
            xxs: "65px"
        },
        px: "2.5%",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        bgcolor: "background.default",
        zIndex: 100,
        transform: "translateY(-100%)",
        transition: "all .6s cubic-bezier(.77,0,.175,1)",
        boxShadow: "0 2px 8px rgba(0,0,0,.07)",
        "&.sticky-header": {
            transform: "translateY(0)",
        }
    }
}