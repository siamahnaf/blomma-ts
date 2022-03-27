import { Box, Grid, CircularProgress, Typography } from "@mui/material";

//Styles
import styles from "Styles/About/CircleProgress.styles";

const CircleProgress = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={styles.Wraper}>
                <Grid container columnSpacing={4}>
                    <Grid item md={6}>
                        <Box>
                            <Box sx={{ position: "relative" }}>
                                <CircularProgress
                                    variant="determinate"
                                    thickness={1}
                                    value={90}
                                    size={175}
                                    sx={styles.ProgressBar}
                                />
                                <Typography variant="h5" component="h5" sx={styles.ProgressCount}>
                                    90%
                                </Typography>
                            </Box>
                            <Typography variant="h6" component="h6" sx={styles.Title}>
                                Insight
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.Description}>
                                Lorem ipsum dolor sit amet consectetur adipisicing eiusmod tempor incididunt labore
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <Box sx={{ position: "relative" }}>
                                <CircularProgress
                                    variant="determinate"
                                    thickness={1}
                                    value={50}
                                    size={175}
                                    sx={styles.ProgressBar}
                                />
                                <Typography variant="h5" component="h5" sx={styles.ProgressCount}>
                                    50%
                                </Typography>
                            </Box>
                            <Typography variant="h6" component="h6" sx={styles.Title}>
                                Insight
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.Description}>
                                Lorem ipsum dolor sit amet consectetur adipisicing eiusmod tempor incididunt labore
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};
export default CircleProgress;