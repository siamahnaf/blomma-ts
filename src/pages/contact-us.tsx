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
                    <Container maxWidth={false} disableGutters sx={{ py: "6.5em" }}>
                        <Grid container spacing={5}>
                            <Grid item md={6}>
                                <GetTouch />
                            </Grid>
                            <Grid item md={6}>
                                <Box sx={{ bgcolor: "background.default", p: "50px" }}>
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