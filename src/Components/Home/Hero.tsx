import { Container, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

//Image
import LikeBox from "Assets/like.png";

const Hero = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container spacing={2}>
                <Grid item md={7}>
                    <Typography variant="h1" component="h1">
                        Creative <br /> agency
                    </Typography>
                    <Typography variant="body1" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Box>
                        <Link href="/about">
                            <a>Read More</a>
                        </Link>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box component="img" src={LikeBox} alt="Like" />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Hero;