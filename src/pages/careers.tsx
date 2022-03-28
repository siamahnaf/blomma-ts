import type { NextPage } from "next";
import { Container, Box, Grid } from "@mui/material";
import { Element } from "react-scroll";

//Layout
import Layout from "Layout";

//Seo
import Seo from "Utilis/Seo";

//Components
import PageTitle from "Components/Careers/PageTitle";
import Designer from "Components/Careers/Designer";
import Illustrator from "Components/Careers/Illustrator";
import Animator from "Components/Careers/Animator";
import GetTouch from "Components/Common/GetTouch";
import Form from "Components/Common/Form";

const Careers: NextPage = () => {
    return (
        <Layout active="careers" light={true}>
            <Seo title="Carers - Blomma" />
            <Box sx={{ bgcolor: "background.default", mb: "400px" }} >
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <PageTitle />
                    <Designer />
                    <Illustrator />
                    <Animator />
                    <Container maxWidth={false} disableGutters sx={{ bgcolor: "primary.creamy", py: "6.5em" }}>
                        <Element name="contact">
                            <Grid container spacing={4}>
                                <Grid item md={6}>
                                    <GetTouch />
                                </Grid>
                                <Grid item md={6}>
                                    <Box sx={{ bgcolor: "background.default", p: "50px" }}>
                                        <Form />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Element>
                    </Container>
                </Box>
            </Box>
        </Layout >
    );
};
export default Careers;