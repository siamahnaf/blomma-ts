import { Container, Box, Grid, Typography } from "@mui/material";

//Data
import Abouts from "Data/Home/About.data";

const About = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container spacing={2}>
                {Abouts && Abouts.length > 0 &&
                    Abouts.map((about, i) => (
                        <Grid item md={3} key={i}>
                            <Box>
                                <Box className="icon-src" component="img" src={about.icon} alt="icon" />
                                <Box className="icon-hover" component="img" src={about.iconHover} alt="icon-hover" />
                                <Typography variant="h6" component="h6">
                                    {about.title}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {about.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};
export default About;