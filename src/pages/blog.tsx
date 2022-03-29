import type { NextPage } from "next";
import { Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Seo
import Seo from "Utilis/Seo";

//Components
import PageTitle from "Components/Blog/PageTitle";
import Card from "Components/Blog/Card";

const blog: NextPage = () => {
    return (
        <Layout active="blog">
            <Seo title="Blog - Blomma" />
            <Box sx={{ bgcolor: "background.default", mb: "400px" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <PageTitle />
                    <Card />
                </Box>
            </Box>
        </Layout>
    );
};
export default blog;