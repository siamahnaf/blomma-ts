import { Box, Grid } from "@mui/material";

//Images
import ProgressImage from "Assets/about/progress.jpg";

//Components
import CircleProgress from "./Progress/CircleProgress";

//Styles
import styles from "Styles/About/Progress.styles";

const Progress = () => {
    return (
        <Box sx={{ py: "6em" }}>
            <Grid container spacing={0}>
                <Grid item md={6}>
                    <CircleProgress />
                </Grid>
                <Grid item md={6}>
                    <Box sx={styles.Images} component="img" src={ProgressImage} alt="Progress" />
                </Grid>
            </Grid>
        </Box>
    );
};
export default Progress;