import type { NextPage } from "next";
import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

const About: NextPage = () => {
    return (
        <Layout active="about">
            <Container maxWidth={false} disableGutters>
                About us
            </Container>
        </Layout>
    );
};
export default About;