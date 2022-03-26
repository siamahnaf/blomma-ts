import { Container, Box, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";

interface Props {
    active: string
}

const Header = ({ active }: Props) => {
    return (
        <Container maxWidth={false} disableGutters sx={{ px: "2.5%", py: "32px" }} component="header">
            <Box>
                <Grid container columnSpacing={2}>
                    <Grid item md={4}>
                        <Logo />
                    </Grid>
                    <Grid item md={8}>
                        <Nav active={active} />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: "none" }}>
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