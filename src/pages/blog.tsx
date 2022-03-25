import type { NextPage } from "next";
import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

const blog: NextPage = () => {
    return (
        <Layout active="blog">
            <Container maxWidth={false} disableGutters>
                Blog
            </Container>
        </Layout>
    );
};
export default blog;