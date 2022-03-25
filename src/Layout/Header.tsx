import { Container, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";

interface Props {
    active: string
}

const Header = ({ active }: Props) => {
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container columnSpacing={2}>
                <Grid item md={4}>
                    <Logo />
                </Grid>
                <Grid item md={8}>
                    <Nav active={active} />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Header;