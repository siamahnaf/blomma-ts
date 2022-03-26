import { Container, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

//Image
import LikeBox from "Assets/like.png";

//Styles
import styles from "Styles/Home/Hero.styles";

const Hero = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container}>
            <Grid container spacing={2}>
                <Grid item md={7}>
                    <Typography variant="h1" component="h1" sx={styles.Title}>
                        Creative <br /> agency
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.Description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Box sx={styles.Button}>
                        <Link href="/about">
                            <a>Read More</a>
                        </Link>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box sx={{ textAlign: "right" }}>
                        <Box sx={styles.LikeBox} component="img" src={LikeBox} alt="Like" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Hero;