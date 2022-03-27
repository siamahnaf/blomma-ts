import { Container, Stack, Typography, InputBase, ButtonBase } from "@mui/material";

//Styles
import styles from "Styles/About/Subscribe.styles";

const Subscribe = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                Subscribe_
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            </Typography>
            <Stack direction="row" sx={{ justifyContent: "center", mt: "3em" }}>
                <InputBase
                    placeholder="Email"
                    sx={styles.InputBox}
                />
                <ButtonBase type="submit" sx={styles.Button}>
                    Subscribe
                </ButtonBase>
            </Stack>
        </Container>
    );
};
export default Subscribe;