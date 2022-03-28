import { Box, List, ListItem, Typography } from "@mui/material";

//Styles
import styles from "Styles/Careers/Lists.styles";

//Types
type Props = {
    list?: string[];
    title?: string
}

const Lists = ({ list, title }: Props) => {
    return (
        <Box>
            <List disablePadding dense>
                <ListItem dense disableGutters disablePadding>
                    <Typography variant="h6" component="h6" sx={styles.Title}>
                        {title}:
                    </Typography>
                </ListItem>
                {list && list.length > 0 &&
                    list.map((item, i) => (
                        <ListItem key={i} dense disableGutters disablePadding sx={{ my: "10px" }}>
                            <Typography variant="body1" component="p">
                                {item}
                            </Typography>
                        </ListItem>
                    ))
                }
            </List>
        </Box >
    );
};
export default Lists;