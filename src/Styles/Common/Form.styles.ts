export default {
    InputBase: {
        p: "8px 16px",
        border: (theme: { palette: { text: { primary: any; }; }; }) => `1px solid ${theme.palette.text.primary}`
    },
    Button: {
        mt: "24px",
        color: "background.default",
        border: (theme: { palette: { text: { primary: string; }; }; }) => `1px solid ${theme.palette.text.primary}`,
        fontWeight: 500,
        fontSize: "15px",
        bgcolor: "text.primary",
        p: "15px 42px",
        transition: ".4s cubic-bezier(.25,.46,.45,.94)",
        "&:hover": {
            bgcolor: "transparent",
            color: "text.primary"
        }
    },
    ErrorText: {
        fontSize: "14px",
        mt: "5px",
        color: "primary.error",
        svg: {
            mb: "-2px",
            mr: "4px"
        }
    }
}