import type { NextPage } from "next";
import { Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Seo
import Seo from "Utilis/Seo";

//Components
import PageTitle from "Components/Process/PageTitle";
import Digital from "Components/Process/Digital";
import Marketing from "Components/Process/Marketing";
import Visible from "Components/Process/Visible";

const Process: NextPage = () => {
    return (
        <Layout active="process" light={true}>
            <Seo title="Our Progress - Blomma" />
            <Box sx={{ bgcolor: "background.default", mb: "400px" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <PageTitle />
                    <Digital />
                    <Marketing />
                    <Visible />
                </Box>
            </Box>
        </Layout>
    );
};
export default Process;