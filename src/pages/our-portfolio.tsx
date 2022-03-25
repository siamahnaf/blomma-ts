import type { NextPage } from "next";
import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

const Portfolio: NextPage = () => {
    return (
        <Layout active="portfolio">
            <Container maxWidth={false} disableGutters>
                Our Portfolio
            </Container>
        </Layout>
    );
};
export default Portfolio;