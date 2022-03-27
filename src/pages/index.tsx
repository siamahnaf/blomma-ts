import type { NextPage } from "next";
import { Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Hero from "Components/Home/Hero";
import Portfolio from "Components/Home/Portfolio";
import About from "Components/Common/About";
import Brand from "Components/Home/Brand";
import Package from "Components/Home/Package";
import Client from "Components/Common/Client";
import Company from "Components/Home/Company";
import Floating from "Components/Home/Floating";

const Home: NextPage = () => {
  return (
    <Layout active="home">
      <Box sx={{ bgcolor: "background.default", mb: "400px", overflow: "hidden" }}>
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Hero />
          <Portfolio />
          <About />
          <Brand />
          <Package />
          <Client />
          <Company />
          <Floating />
        </Box>
      </Box>
    </Layout>
  );
};
export default Home;