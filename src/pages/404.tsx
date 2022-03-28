import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";

//Seo
import Seo from "Utilis/Seo";

//404
import Not404 from "Assets/not.png";

//Styles
import styles from "Styles/404/NotFound.styles";

const NotFound = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container}>
            <Seo title="Page Not Found - Blomma" />
            <Box sx={styles.Wrapper}>
                <Box sx={styles.Inner}>
                    <Box component="img" src={Not404} alt="404" />
                    <Typography variant="h1" component="h1" sx={styles.Title}>
                        Page cannot be found.
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.Description}>
                        The page you&apos;re looking is no longer available or is temporary removed. Please try again later, look for the page with your search engine, refresh the page in a few minutes or make sure the web address is correct.
                    </Typography>
                    <Box sx={styles.Button}>
                        <Link href="/">
                            <a>Back to home</a>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
export default NotFound;