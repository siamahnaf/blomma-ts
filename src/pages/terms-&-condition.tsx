import type { NextPage } from "next";
import { Container, Box, Grid } from "@mui/material";

//Layout
import Layout from "Layout";

//Seo
import Seo from "Utilis/Seo";

//Data
import TermsCondition from "Data/About/Terms.data";

//Components
import PageTitle from "Components/Terms&Privacy/PageTitle";
import Sidebar from "Components/Terms&Privacy/Sidebar";
import Content from "Components/Terms&Privacy/Content";

const Terms: NextPage = () => {
    return (
        <Layout active="about" light={true}>
            <Seo title="Terms & Condition - Blomma" />
            <Box sx={{ bgcolor: "background.default", mb: "400px" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <PageTitle title="Terms & Condition" />
                    <Container maxWidth={false} disableGutters sx={{ py: "8em" }}>
                        <Grid container columnSpacing={8}>
                            <Grid item md={3} sx={{
                                position: "sticky",
                                top: "100px",
                                height: "max-content"
                            }}><Sidebar /></Grid>
                            <Grid item md={9}><Content item={TermsCondition} /></Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout >
    );
};
export default Terms;