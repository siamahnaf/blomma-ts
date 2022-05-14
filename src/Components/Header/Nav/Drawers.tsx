import { MouseEvent } from "react";
import { Box, Typography, List, ListItem, ButtonBase, Stack } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Data
import Navs from "Data/Header/Nav.data";

//Styles
import styles from "Styles/Header/Drawers.styles";

//Logo
import Logo from "Assets/logo.png";

//Data
const Icons = [
    { name: "fa-brands:facebook-f", bg: "#0066FF", bgHover: "#282828", url: "/" },
    { name: "fa-brands:instagram", bg: "#FF2106", bgHover: "#04389E", url: "/" },
    { name: "fa-brands:twitter", bg: "#7027E1", bgHover: "#FF0437", url: "/" },
    { name: "fa-brands:pinterest-p", bg: "#4E1E95", bgHover: "#0066FF", url: "/" }
]

interface Props {
    toggleDrawer: (current: boolean) => (event: MouseEvent<HTMLButtonElement>) => void;
    active: string;
}

const Drawers = ({ toggleDrawer, active }: Props) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Box sx={styles.CloseIcon}>
                <ButtonBase onClick={toggleDrawer(false)}>
                    <Icon icon="eva:close-outline" />
                </ButtonBase>
            </Box>
            <Box sx={styles.Logo} component="img" src={Logo} alt="Logo" />
            <List disablePadding dense sx={styles.ListNav}>
                {Navs && Navs.length > 0 &&
                    Navs.map((nav, i) => (
                        <ListItem key={i} dense disableGutters disablePadding sx={{}}>
                            <Link href={nav.url}>
                                <a className={active === nav.id ? "active" : ""}>
                                    {nav.name}
                                </a>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            </Typography>
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
        </Box>
    );
};
export default Drawers;