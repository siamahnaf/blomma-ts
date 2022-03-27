import type { NextPage } from "next";
import { Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import PageTitlte from "Components/About/PageTitlte";
import About from "Components/Common/About";
import Marketing from "Components/About/Marketing";
import Team from "Components/About/Team";
import Client from "Components/Common/Client";
import Progress from "Components/About/Progress";
import Subscribe from "Components/About/Subscribe";

const AboutUs: NextPage = () => {
    return (
        <Layout active="about">
            <Box sx={{ bgcolor: "primary.background", mb: "400px" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <PageTitlte />
                    <About />
                    <Marketing />
                    <Team />
                    <Client />
                    <Progress />
                    <Subscribe />
                </Box>
            </Box>
        </Layout>
    );
};
export default AboutUs;