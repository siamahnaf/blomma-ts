import type { NextPage } from "next";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";

//Layout
import Layout from "Layout";

//Seo
import Seo from "Utilis/Seo";

//Components
import Blogtitle from "Components/SingleBlog/Blogtitle";
import Blog from "Components/SingleBlog/Blog";
import Share from "Components/SingleBlog/Share";
import Author from "Components/SingleBlog/Author";

const SingleBlog: NextPage = () => {
    const router = useRouter();
    //console.log(router.query.slug)
    return (
        <Layout active="blog">
            <Seo title="Single Blog - Blomma" />
            <Box sx={{ bgcolor: "background.default", mb: "400px" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Blogtitle />
                    <Container maxWidth={false} disableGutters sx={{ px: "15%", py: "8em" }}>
                        <Blog />
                        <Share />
                        <Author />
                    </Container>
                </Box>
            </Box>
        </Layout>
    );
};
export default SingleBlog;