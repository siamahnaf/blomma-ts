import type { NextPage } from "next";
import { Container, Box, Grid } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import PageTitle from "Components/Contact/PageTitle";
import GetTouch from "Components/Common/GetTouch";
import Form from "Components/Common/Form";

const Contact: NextPage = () => {
    return (
        <Layout active="contact">
            <Box sx={{ bgcolor: "primary.grenish", mb: "400px" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <PageTitle />
                    <Container maxWidth={false} disableGutters sx={{
                        py: {
                            xxxl: "10em",
                            xxl: "9em",
                            xl: "8em",
                            md: "6.5em",
                            smd: "4em",
                            sm: "3em",
                            xs: "2.5em",
                            xxs: "2em"
                        }
                    }}>
                        <Grid container spacing={5}>
                            <Grid item {...{ md: 6, xxs: 12 }}>
                                <GetTouch />
                            </Grid>
                            <Grid item {...{ md: 6, xxs: 12 }}>
                                <Box sx={{ bgcolor: "background.default", p: { sm: "50px", xs: "20px", xxs: "15px" } }}>
                                    <Form />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    );
};
export default Contact;