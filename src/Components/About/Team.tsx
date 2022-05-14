import { Box, Grid, Typography, List, ListItem, Stack } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Data
import Teams from "Data/About/Team.data";

//Styles
import styles from "Styles/About/Team.styles";

const Team = () => {
    return (
        <Box sx={{ mb: "3em" }}>
            <Grid container spacing={0}>
                {Teams && Teams.length > 0 &&
                    Teams.map((team, i) => (
                        <Grid item {...{ md: 3, lsm: 6, xxs: 12 }} key={i}>
                            <Box sx={styles.Main}>
                                <Box sx={styles.Image} component="img" src={team.profile} alt={team.name} />
                                <Box sx={styles.Container} className="container-hover">
                                    <Box sx={styles.Wrapper} className="wraper-hover">
                                        <Box sx={styles.Inner} className="inner-hover">
                                            <Typography variant="h6" component="h6" sx={styles.Name}>
                                                {team.name}
                                            </Typography>
                                            <Typography variant="body1" component="p" sx={styles.Job}>
                                                {team.job}
                                            </Typography>
                                            <List component={Stack} direction="row" disablePadding dense sx={styles.List}>
                                                {team.social && team.social.length > 0 &&
                                                    team.social.map((social, i) => (
                                                        <ListItem key={i} dense disableGutters disablePadding>
                                                            <Link href={social.url}>
                                                                <a>
                                                                    <Icon icon={social.icon} />
                                                                </a>
                                                            </Link>
                                                        </ListItem>
                                                    ))

                                                }
                                            </List>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Team;