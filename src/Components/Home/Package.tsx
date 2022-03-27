import { Container, Stack, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import styles from "Styles/Home/Package.styles";

//Background Image
import Bg from "Assets/package-bg.jpg";

//Vector
import PackageVector from "Utilis/Vector/PackageVector";

const Package = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "3em", position: "relative" }}>
            <Box sx={styles.Vector}>
                <PackageVector />
            </Box>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ textAlign: "right" }}>
                    <Box width="62%" component="img" src={Bg} alt="Image" />
                </Box>
                <Box sx={styles.Content}>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <Box sx={styles.Container}>
                                <Typography variant="h4" component="h4" sx={styles.Heading}>
                                    Unique packaging matters
                                </Typography>
                                <Stack direction="row">
                                    <Box sx={styles.Line} />
                                    <Box>
                                        <Typography variant="body1" component="p" sx={{ fontSize: "15px" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        </Typography>
                                        <Box sx={styles.Button}>
                                            <Link href="/">
                                                <a>Read More</a>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item md={6} />
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
export default Package;