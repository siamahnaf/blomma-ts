import { List, ListItem, Stack } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/Footer/Social.styles";

//Data
const Icons = [
    { name: "fa-brands:facebook-f", bg: "#0066FF", bgHover: "#282828", url: "/" },
    { name: "fa-brands:instagram", bg: "#FF2106", bgHover: "#04389E", url: "/" },
    { name: "fa-brands:twitter", bg: "#7027E1", bgHover: "#FF0437", url: "/" },
    { name: "fa-brands:pinterest-p", bg: "#4E1E95", bgHover: "#0066FF", url: "/" }
]

const Social = () => {
    return (
        <List component={Stack} direction="row" disablePadding dense sx={styles.Social}>
            {Icons && Icons.length > 0 &&
                Icons.map((icon, i) => (
                    <ListItem key={i} dense disableGutters disablePadding sx={{ a: { bgcolor: icon.bg, "&:hover": { bgcolor: icon.bgHover } } }}>
                        <Link href={icon.url}>
                            <a>
                                <Icon icon={icon.name} />
                            </a>
                        </Link>
                    </ListItem>
                ))
            }
        </List>
    );
};
export default Social;