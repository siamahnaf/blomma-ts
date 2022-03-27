import { useState, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";

//Styles
import styles from "Styles/Header/Header.styles";

interface Props {
    active: string
}

const Header = ({ active }: Props) => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <Container maxWidth={false} disableGutters sx={{ px: "2.5%", bgcolor: "background.default" }} component="header">
            <Box sx={{ py: "32px", bgcolor: "background.default" }}>
                <Grid container columnSpacing={2}>
                    <Grid item md={4}>
                        <Logo />
                    </Grid>
                    <Grid item md={8}>
                        <Nav active={active} />
                    </Grid>
                </Grid>
            </Box>
            <Box className={sticky ? "sticky-header" : ""} sx={styles.StickyHeader}>
                <Grid container columnSpacing={2}>
                    <Grid item md={4}>
                        <Logo />
                    </Grid>
                    <Grid item md={8}>
                        <Nav active={active} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
export default Header;