import type { NextPage } from "next";
import { Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Seo
import Seo from "Utilis/Seo";

//Components
import PageTitle from "Components/Portfolio/PageTitle";
import Masonrys from "Components/Portfolio/Masonrys";

const Portfolio: NextPage = () => {
    return (
        <Layout active="portfolio">
            <Seo title="Our Portfolio - Blomma" />
            <Box sx={{ bgcolor: "background.default", mb: "400px" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <PageTitle />
                    <Masonrys />
                </Box>
            </Box>
        </Layout>
    );
};
export default Portfolio;