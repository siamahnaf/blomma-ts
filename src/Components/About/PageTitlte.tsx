import { Container, Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/About/PageTitle.styles";

const PageTitlte = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container}>
            <Box>
                <Typography variant="h3" component="h3" sx={styles.TitleText}>
                    About us
                </Typography>
            </Box>
        </Container>
    );
};
export default PageTitlte;