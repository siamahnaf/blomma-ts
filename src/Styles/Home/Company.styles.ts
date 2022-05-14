export default {
    Embla: {
        overflow: "hidden"
    },
    EmblaContainer: {
        display: "flex"
    },
    EmblaSlide: {
        position: "relative",
        flex: {
            msm: "0 0 20%",
            xxs: "0 0 50%"
        }
    },
    Images: {
        cursor: "pointer",
        "& .image-src": {
            opacity: 1,
            willChange: "opacity",
            transition: "opacity .4s cubic-bezier(.25,.46,.45,.94)"
        },
        "& .image-src-hover": {
            position: "absolute",
            top: "0",
            left: "0",
            opacity: 0,
            willChange: "opacity"
        },
        "&:hover": {
            "& .image-src": {
                opacity: 0,
                transition: "none"
            },
            "& .image-src-hover": {
                opacity: 1,
            }
        }
    }
}