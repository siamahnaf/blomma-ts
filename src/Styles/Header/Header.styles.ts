export default {
    StickyHeader: {
        py: "32px",
        height: "102px",
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