import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/Home/Floating.styles";

//Data
const Icons = [
    { name: "fa-brands:facebook-f", url: "/" },
    { name: "fa-brands:instagram", url: "/" },
    { name: "fa-brands:twitter", url: "/" },
    { name: "fa-brands:pinterest-p", url: "/" }
]

const Floating = () => {
    return (
        <Box sx={styles.Container}>
            <List disablePadding dense sx={styles.List}>
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
export default Floating;