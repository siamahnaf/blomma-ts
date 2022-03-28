export default {
    Container: {
        pt: "3em",
        pb: "8em",
        textAlign: "center"
    },
    Title: {
        fontSize: "60px",
        fontWeight: 600
    },
    Description: {
        my: "14px",
        fontSize: "17px"
    },
    InputBox: {
        border: (theme: { palette: { text: { primary: any; }; }; }) => `1px solid ${theme.palette.text.primary}`,
        padding: "11px 16px",
        width: "425px",
        fontSize: "16px"
    },
    Button: {
        textDecoration: "none",
        color: "background.default",
        border: (theme: { palette: { text: { primary: string; }; }; }) => `1px solid ${theme.palette.text.primary}`,
        borderLeft: "none",
        fontWeight: 500,
        fontSize: "15px",
        p: "15px 42px",
        transition: ".4s cubic-bezier(.25,.46,.45,.94)",
        bgcolor: "text.primary",
        "&:hover": {
            bgcolor: "background.default",
            color: "text.primary"
        }
    },
    ErrorMessage: {
        width: "max-content",
        mx: "auto",
        mt: "15px",
        "& p": {
            fontSize: "15px",
            color: "primary.error",
            svg: {
                mr: "4px",
                mb: "-2px"
            }
        }
    }
}