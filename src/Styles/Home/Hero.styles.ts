export default {
    Container: {
        pt: "4.5em",
        pb: "11em"
    },
    Title: {
        fontSize: "115px",
        fontWeight: 600,
        lineHeight: "0.95em",
        marginBottom: "40px"
    },
    Description: {
        fontSize: "17px",
        mt: "40px",
        mb: "60px"
    },
    Button: {
        a: {
            textDecoration: "none",
            color: "text.primary",
            border: (theme: { palette: { text: { primary: string; }; }; }) => `1px solid ${theme.palette.text.primary}`,
            fontWeight: 500,
            fontSize: "15px",
            p: "15px 42px",
            transition: ".4s cubic-bezier(.25,.46,.45,.94)",
            "&:hover": {
                bgcolor: "text.primary",
                color: "background.default"
            }
        }
    },
    LikeBox: {
        width: "350px",
        mr: "30px"
    }
}