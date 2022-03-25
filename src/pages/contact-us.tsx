import type { NextPage } from "next";
import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

const Contact: NextPage = () => {
    return (
        <Layout active="contact">
            <Container maxWidth={false} disableGutters>
                Contact Us
            </Container>
        </Layout>
    );
};
export default Contact;