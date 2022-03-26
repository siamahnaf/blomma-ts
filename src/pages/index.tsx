import type { NextPage } from "next";
import { Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Hero from "Components/Home/Hero";
import Portfolio from "Components/Home/Portfolio";
import About from "Components/Home/About";
import Brand from "Components/Home/Brand";
import Package from "Components/Home/Package";
import Client from "Components/Home/Client";
import Company from "Components/Home/Company";

const Home: NextPage = () => {
  return (
    <Layout active="home">
      <Box sx={{ bgcolor: "background.default", mb: "400px" }}>
        <Hero />
        <Portfolio />
        <About />
        <Brand />
        <Package />
        <Client />
        <Company />
      </Box>
    </Layout>
  );
};
export default Home;