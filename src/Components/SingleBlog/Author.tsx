import { Box, Grid, Avatar, Typography } from "@mui/material";

//Data
import news from "Data/Blog/Blog.data";

//Styles
import styles from "Styles/SingleBlog/Author.styles";

const Author = () => {
    return (
        <Box sx={styles.Container}>
            <Grid container spacing={3}>
                <Grid item md={2.2}>
                    <Box>
                        <Avatar
                            src={news.author.avatar}
                            sx={{ width: 120, height: 120 }}
                            alt={news.author.name}
                        />
                    </Box>
                </Grid>
                <Grid item md={9.8}>
                    <Typography variant="body1" component="p" sx={styles.Name}>
                        {news.author.name} {" "}
                        <Typography variant="body2" component="span">
                            Author
                        </Typography>
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.Description}>
                        {news.author.description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Author;