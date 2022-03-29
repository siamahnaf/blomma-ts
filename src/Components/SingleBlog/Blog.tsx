import { Box, Typography } from "@mui/material";

//Data
import news from "Data/Blog/Blog.data";

//Styles
import styles from "Styles/SingleBlog/Blog.styles";

const Blog = () => {
    return (
        <Box>
            <Box width="100%" component="img" src={news.image} alt={news.title} />
            <Box sx={{ mt: "35px" }}>
                <Box sx={{ mb: "6px" }}>
                    <Box sx={styles.Time}>
                        <Typography variant="body1" component="p">
                            {news.time}
                        </Typography>
                    </Box>
                    <Box sx={styles.Category}>
                        <Typography variant="body1" component="p">
                            {news.category}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={styles.Title}>
                    <Typography variant="h4" component="h4">
                        {news.title}
                    </Typography>
                </Box>
                <Typography variant="body1" component="p" sx={styles.Description}>
                    {news.description}
                </Typography>
            </Box>
        </Box>
    );
};
export default Blog;