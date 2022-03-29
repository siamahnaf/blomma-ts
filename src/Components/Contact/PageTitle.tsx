import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/Contact/PageTitle.styles";

const PageTitle = () => {
    return (
        <Box sx={styles.Container}>
            <Box>
                <Typography variant="h3" component="h3" sx={styles.TitleText}>
                    Get in touch!
                </Typography>
            </Box>
        </Box>
    );
};
export default PageTitle;