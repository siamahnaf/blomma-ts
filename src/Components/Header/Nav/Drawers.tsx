import { MouseEvent, FC } from "react";
import { Box, Typography, List, ListItem, ButtonBase, Stack } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Icons = [
    { name: "fa-brands:facebook-f", bg: "red", url: "/" },
    { name: "fa-brands:instagram", bg: "red", url: "/" },
    { name: "fa-brands:twitter", bg: "red", url: "/" },
    { name: "fa-brands:pinterest-p", bg: "red", url: "/" }
]

interface Props {
    toggleDrawer: (current: boolean) => (event: MouseEvent<HTMLButtonElement>) => void
}

const Drawers = ({ toggleDrawer }: Props) => {
    return (
        <Box>
            <Box>
                <ButtonBase onClick={toggleDrawer(false)}>
                    <Icon icon="eva:close-outline" />
                </ButtonBase>
            </Box>
            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            </Typography>
            <List component={Stack} direction="row">
                {Icons && Icons.length > 0 &&
                    Icons.map((icon, i) => (
                        <ListItem key={i}>
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