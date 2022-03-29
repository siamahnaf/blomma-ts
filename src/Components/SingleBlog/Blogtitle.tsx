import { Box, Typography } from "@mui/material";

//BlogData
import Blogs from "Data/Blog/Blog.data";

//Styles
import styles from "Styles/Blog/PageTitle.styles";

const Blogtitle = () => {
    return (
        <Box sx={styles.Container}>
            <Box>
                <Typography variant="h3" component="h3" sx={styles.TitleText}>
                    {Blogs.title}
                </Typography>
            </Box>
        </Box>
    );
};
export default Blogtitle;