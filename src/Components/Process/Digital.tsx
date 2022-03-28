import { Box, Grid, Typography, Stack } from "@mui/material";
import Link from "next/link";

//Images
import DigitalImage from "Assets/process/digital.jpg";

//Styles
import styles from "Styles/Process/Process.styles";

const Digital = () => {
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item md={6}>
                    <Box sx={styles.Image} component="img" src={DigitalImage} alt="Digital" />
                </Grid>
                <Grid item md={6}>
                    <Box sx={styles.Digital}>
                        <Box sx={styles.Wrapper}>
                            <Typography variant="h3" component="h3" sx={styles.Heading}>
                                Meet our digital strategy experts
                            </Typography>
                            <Stack direction="row">
                                <Box sx={styles.Line} />
                                <Box>
                                    <Typography variant="body1" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                    <Box sx={styles.Button}>
                                        <Link href="/">
                                            <a>
                                                Read More
                                            </a>
                                        </Link>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Digital;