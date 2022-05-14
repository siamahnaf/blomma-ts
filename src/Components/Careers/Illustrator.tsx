import { Container, Typography, Grid, Box } from "@mui/material";
import { Link } from "react-scroll";

//Components
import Lists from "./List/Lists";

//Data
import { Requirements, Offers } from "Data/Careers/Illustrator.data";

//Styles
import styles from "Styles/Careers/Careers.styles";

const Illustrator = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ bgcolor: "primary.creamy", ...styles.Container }}>
            <Grid container rowSpacing={{ md: 2, xxs: 8 }} columnSpacing={{ md: 2, xxs: 0 }}>
                <Grid item {...{ md: 6, xxs: 12 }}>
                    <Box>
                        <Typography variant="h5" component="h5" sx={styles.Title}>
                            Illustrator
                        </Typography>
                        <Typography variant="body1" component="p" sx={styles.Description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip exea commodoe consequat. Duis aute irure dolor in reprehenderit
                        </Typography>
                        <Box sx={styles.Button}>
                            <Link spy={true} smooth={true} offset={50} to="contact">
                                Submit
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item {...{ md: 3, sm: 6, xxs: 12 }}>
                    <Lists list={Requirements} title="Requirements" />
                </Grid>
                <Grid item {...{ md: 3, sm: 6, xxs: 12 }}>
                    <Lists list={Offers} title="Offers" />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Illustrator;