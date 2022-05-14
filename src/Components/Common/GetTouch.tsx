import { Box, Typography, List, ListItem, Stack } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/Common/GetTouch.styles";

//Data
const Icons = [
    { name: "fa-brands:facebook-f", url: "/" },
    { name: "fa-brands:instagram", url: "/" },
    { name: "fa-brands:twitter", url: "/" },
    { name: "fa-brands:pinterest-p", url: "/" }
]

const GetTouch = () => {
    return (
        <Box sx={{ mt: { md: "1.2em", xxs: "0" } }}>
            <Typography variant="h4" component="h4" sx={styles.Title}>
                Get in touch!
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna null amet sed aliqua.
            </Typography>
            <Box sx={styles.Address}>
                <Typography variant="body1" component="p">
                    <Link href="/">
                        <a>711 Old York Drive Richmond, VA 23223</a>
                    </Link>
                </Typography>
                <Typography variant="body1" component="p">
                    Monday — Friday: 9 am to 16 pm
                </Typography>
                <Typography variant="body1" component="p">
                    <Link href="mailto:blomma@qodeinteractive.com">
                        <a>blomma@qodeinteractive.com</a>
                    </Link>
                </Typography>
            </Box>
            <List component={Stack} direction="row" disablePadding dense sx={styles.List}>
                {Icons && Icons.length > 0 &&
                    Icons.map((icon, i) => (
                        <ListItem key={i} dense disableGutters disablePadding>
                            <Link href={icon.url}>
                                <a>
                                    <Icon icon={icon.name} />
                                </a>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default GetTouch;