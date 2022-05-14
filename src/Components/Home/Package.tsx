import { useState } from "react";
import { Container, Stack, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";

//Styles
import styles from "Styles/Home/Package.styles";

//Background Image
import Bg from "Assets/package-bg.jpg";

//Vector
import PackageVector from "Utilis/Vector/PackageVector";

const Package = () => {
    const [vectorOne, setVectorOne] = useState(false);
    const onChangeOne = (isVisible: boolean) => {
        if (isVisible) {
            setVectorOne(true)
        }
    }
    return (
        <Container maxWidth={false} disableGutters sx={{ py: { smd: "3em", lsm: "1em" }, position: "relative", mt: { lg: 0, smd: "3em", xxs: 0 }, mb: { lg: 0, smd: "5em", xxs: 0 } }}>
            <Box sx={styles.Vector}>
                <VisibilitySensor partialVisibility onChange={onChangeOne}>
                    <Box sx={styles.VectorInner} className={vectorOne ? "visible" : ""}>
                        <PackageVector />
                    </Box>
                </VisibilitySensor>
            </Box>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ textAlign: { lg: "right", md: "center" } }}>
                    <Box sx={styles.ImageBg} component="img" src={Bg} alt="Image" />
                </Box>
                <Box sx={styles.Content}>
                    <Grid container spacing={3}>
                        <Grid item {...{ lg: 6, xxs: 12 }}>
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
                        <Grid item {...{ lg: 6, xxs: 12 }} />
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
export default Package;