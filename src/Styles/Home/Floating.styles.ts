export default {
    Container: {
        position: "fixed",
        left: "2.5%",
        top: "50%",
        transform: "translateY(-50%)",
        display: {
            md: "block",
            xxs: "none"
        }
    },
    List: {
        li: {
            my: "15px",
            a: {
                textDecoration: "none",
                color: "black",
                fontSize: "18px",
                transition: "opacity .4s cubic-bezier(.25,.46,.45,.94)",
                "&:hover": {
                    opacity: 0.7
                }
            }
        }
    }
}