export default {
    Title: {
        fontSize: "25px",
        fontWeight: 600
    },
    Description: {
        fontSize: "15px",
        mt: "33px",
        mb: "14px"
    },
    Button: {
        mt: "3.5em",
        a: {
            textDecoration: "none",
            color: "background.default",
            border: (theme: { palette: { text: { primary: string; }; }; }) => `1px solid ${theme.palette.text.primary}`,
            fontWeight: 500,
            fontSize: "15px",
            p: "13px 30px",
            bgcolor: "text.primary",
            cursor: "pointer",
            transition: ".4s cubic-bezier(.25,.46,.45,.94)",
            "&:hover": {
                bgcolor: "background.default",
                color: "text.primary"
            }
        }
    },
}