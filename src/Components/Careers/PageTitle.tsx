import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/Careers/PageTitle.styles";

const PageTitle = () => {
    return (
        <Box sx={styles.Container}>
            <Box>
                <Typography variant="h3" component="h3" sx={styles.TitleText}>
                    Careers
                </Typography>
            </Box>
        </Box>
    );
};
export default PageTitle;