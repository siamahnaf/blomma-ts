import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/Terms&Privacy/Sidebar.styles";

//Data
const terms = [
    "What’s the best part of WordPress?",
    "Should I get this theme?",
    "Essential features",
    "Photography key features",
    "Design key features",
    "New layots",
    "Company polices",
    "Privacy polices"
]

const Sidebar = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                Most frequently asked questions
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur a elit. In ut ullam corper leo, eget euismod orci.
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Subtitle}>
                Our Terms & Policy:
            </Typography>
            <Box>
                {terms && terms.length > 0 &&
                    terms.map((term, i) => (
                        <Stack direction="row" sx={styles.Terms} key={i}>
                            <Icon icon="charm:shield-tick" />
                            <Typography variant="body1" component="p">
                                {term}
                            </Typography>
                        </Stack>
                    ))
                }
            </Box>
        </Box>
    );
};
export default Sidebar;