import type { NextPage } from "next";
import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

const Progress: NextPage = () => {
    return (
        <Layout active="progress">
            <Container maxWidth={false} disableGutters>
                Our Progress
            </Container>
        </Layout>
    );
};
export default Progress;