import { useState, KeyboardEvent, MouseEvent } from "react";
import { Box, Stack, List, Drawer, ListItem, ButtonBase } from "@mui/material";
import Link from "next/link";

//Components
import Drawers from "./Nav/Drawers";

//Data
import Navs from "Data/Header/Nav.data";

//Styles
import styles from "Styles/Header/Nav.styles";

//Types
interface Props {
    active: string;
    light?: boolean;
}

const Nav = ({ active, light }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleDrawer = (current: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }
        setOpen(current);
    };
    return (
        <Box>
            <List component={Stack} direction="row" disablePadding dense sx={styles.List}>
                {Navs && Navs.length > 0 &&
                    Navs.map((nav, i) => (
                        <ListItem key={i} dense disableGutters disablePadding sx={{ a: { color: `${light ? "background.default" : "text.primary"}`, display: { lg: "block", xxs: "none" }, "&:after": { bgcolor: `${light ? "background.default" : "text.primary"}` } } }}>
                            <Link href={nav.url}>
                                <a className={active === nav.id ? "active" : ""}>
                                    {nav.name}
                                </a>
                            </Link>
                        </ListItem>
                    ))
                }
                <ListItem dense disableGutters disablePadding>
                    <ButtonBase onClick={toggleDrawer(true)} sx={styles.Bar}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
                            <rect width="32" height="32"></rect>
                            <line fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" x1="8" y1="16" x2="24" y2="16"></line>
                            <line fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" x1="8" y1="21" x2="24" y2="21"></line>
                            <line fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" x1="8" y1="11" x2="24" y2="11"></line>
                        </svg>
                    </ButtonBase>
                </ListItem>
            </List>
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                ModalProps={{
                    disableScrollLock: true
                }}
                sx={styles.Drawer}
            >
                <Drawers toggleDrawer={toggleDrawer} />
            </Drawer>
        </Box>
    );
};
export default Nav;