import { Container, Stack, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Package = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Box>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Typography variant="h4" component="h4">
                            Unique packaging matters
                        </Typography>
                        <Stack>
                            <Box />
                            <Box>
                                <Typography variant="body1" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                </Typography>
                                <Box>
                                    <Link href="/">
                                        <a>Read More</a>
                                    </Link>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item md={6} />
                </Grid>
            </Box>
        </Container>
    );
};
export default Package;