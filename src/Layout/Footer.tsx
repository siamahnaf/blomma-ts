import { Container, Box, Typography } from "@mui/material";

//Logo
import Logo from "Assets/logo-white.png";

//Components
import Social from "Components/Footer/Social";

//Styles
import styles from "Styles/Footer/Footer.styles";

const Footer = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container}>
            <Box width="130px" component="img" src={Logo} alt="Logo" />
            <Typography variant="body1" component="p" sx={styles.Text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </Typography>
            <Social />
            <Typography variant="body1" component="p" sx={styles.Copytright}>
                © {new Date().getFullYear()} Codeforest Interactive, All Rights Reserved
            </Typography>
        </Container>
    );
};
export default Footer;