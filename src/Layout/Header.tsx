import { useState, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";

//Styles
import styles from "Styles/Header/Header.styles";

interface Props {
    active: string;
    light?: boolean;
}

const Header = ({ active, light }: Props) => {
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
            <Box sx={{
                py: {
                    xxxl: "40px",
                    xxl: "37px",
                    xl: "35px",
                    md: "32px",
                    smd: "28px",
                    lsm: "25px",
                    msm: "20px",
                    sm: "20px",
                    xs: "18px",
                    xxs: "16px"
                }, position: "relative", zIndex: 3
            }}>
                <Grid container columnSpacing={2} sx={{ alignItems: "center" }}>
                    <Grid item {...{ md: 4, xxs: 6 }}>
                        <Logo light={light} />
                    </Grid>
                    <Grid item {...{ md: 8, xxs: 6 }}>
                        <Nav active={active} light={light} />
                    </Grid>
                </Grid>
            </Box>
            <Box className={sticky ? "sticky-header" : ""} sx={styles.StickyHeader}>
                <Grid container columnSpacing={2} sx={{ alignItems: "center" }}>
                    <Grid item {...{ md: 4, xxs: 6 }}>
                        <Logo />
                    </Grid>
                    <Grid item {...{ md: 8, xxs: 6 }}>
                        <Nav active={active} />
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};
export default Header;