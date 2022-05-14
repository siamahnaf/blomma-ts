import { Container, Box, Grid, Typography } from "@mui/material";

//Data
import Abouts from "Data/Home/About.data";

//Styles
import styles from "Styles/Common/About.styles";

const About = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "5em" }}>
            <Grid container rowSpacing={{ lg: 0, smd: 10, xxs: 10 }} columnSpacing={{ lg: 2, smd: 6, xxs: 0 }}>
                {Abouts && Abouts.length > 0 &&
                    Abouts.map((about, i) => (
                        <Grid item {...{ lg: 3, smd: 6, xxs: 12 }} key={i}>
                            <Box sx={styles.Container}>
                                <Box sx={styles.Images}>
                                    <Box className="icon-src" component="img" src={about.icon} alt="icon" />
                                    <Box className="icon-hover" component="img" src={about.iconHover} alt="icon-hover" />
                                </Box>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="h6" component="h6" sx={styles.Title}>
                                        {about.title}
                                    </Typography>
                                    <Typography variant="body1" component="p" sx={styles.Description}>
                                        {about.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};
export default About;