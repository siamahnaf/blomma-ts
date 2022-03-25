import { Container, Box, Typography } from "@mui/material";

//Logo
import Logo from "Assets/logo-white.png";

//Components
import Social from "Components/Footer/Social";

const Footer = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ bgcolor: "black" }}>
            <Box component="img" src={Logo} alt="Logo" />
            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </Typography>
            <Social />
            <Typography variant="body1" component="p">
                © {new Date().getFullYear()} Codeforest Interactive, All Rights Reserved
            </Typography>
        </Container>
    );
};
export default Footer;