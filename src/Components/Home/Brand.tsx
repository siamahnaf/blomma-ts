import { useState } from "react";
import { Container, Stack, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";

//Styles
import styles from "Styles/Home/Brand.styles";

//Background Image
import Bg from "Assets/brand-bg.png";

//Vector
import BrandVector from "Utilis/Vector/BrandVector";

const Brand = () => {
    const [vectorOne, setVectorOne] = useState(false);
    const onChangeOne = (isVisible: boolean) => {
        if (isVisible) {
            setVectorOne(true)
        }
    }
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "3em", position: "relative" }}>
            <Box sx={styles.Vector}>
                <VisibilitySensor partialVisibility onChange={onChangeOne}>
                    <Box sx={styles.VectorInner} className={vectorOne ? "visible" : ""}>
                        <BrandVector />
                    </Box>
                </VisibilitySensor>
            </Box>
            <Box sx={{ position: "relative" }}>
                <Box sx={styles.Image} component="img" src={Bg} alt="background" />
                <Box sx={styles.Content}>
                    <Grid container spacing={3}>
                        <Grid item {...{ lg: 6, xxs: 12 }} />
                        <Grid item {...{ lg: 6, xxs: 12 }}>
                            <Box sx={styles.Container}>
                                <Typography variant="h4" component="h4" sx={styles.Heading}>
                                    Brands tell original stories
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
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
export default Brand;