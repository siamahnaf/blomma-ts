export default {
    Title: {
        fontSize: "40px",
        fontWeight: 600,
        mb: "30px"
    },
    Description: {
        fontSize: "16px",
        mb: "25px"
    },
    Address: {
        mb: "35px",
        "& p": {
            fontSize: "16px",
            my: "2px",
            a: {
                textDecoration: "none",
                color: "text.primary",
                "&:hover": {
                    textDecoration: "underline",
                    textUnderlinePosition: "under"
                }
            }
        }
    },
    List: {
        li: {
            width: "unset",
            mr: "20px",
            a: {
                color: "text.primary",
                fontSize: "17px",
                transition: "color .2s ease-out",
                "&:hover": {
                    color: "background.default"
                }
            }
        }
    }
}