import { useState, KeyboardEvent, MouseEvent } from "react";
import { Box, Stack, List, Drawer, ListItem, ButtonBase } from "@mui/material";
import Link from "next/link";

//Components
import Drawers from "./Nav/Drawers";

//Data
import Navs from "Data/Header/Nav.data";

interface Props {
    active: string
}

const Nav = ({ active }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleDrawer = (current: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }
        setOpen(current);
    };
    return (
        <Box>
            <List component={Stack} direction="row">
                {Navs && Navs.length > 0 &&
                    Navs.map((nav, i) => (
                        <ListItem key={i}>
                            <Link href={nav.url}>
                                <a className={active === nav.id ? "active" : ""}>
                                    {nav.name}
                                </a>
                            </Link>
                        </ListItem>
                    ))
                }
                <ListItem>
                    <ButtonBase onClick={toggleDrawer(true)}>
                        <Box className="rippleOne" />
                        <Box className="rippleTwo" />
                        <Box className="rippleThree" />
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
            >
                <Drawers toggleDrawer={toggleDrawer} />
            </Drawer>
        </Box>
    );
};
export default Nav;