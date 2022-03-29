import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";

//Data
import News from "Data/Blog/News.data";

//Styles
import styles from "Styles/Blog/Card.styles";

const Card = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ px: "12%", pt: "8em", pb: "3em" }}>
            {News && News.length > 0 &&
                News.map((news, i) => (
                    <Box key={i}>
                        <Link href={`/blog/${news.title.replace(' ', '-').toLowerCase()}`}>
                            <a>
                                <Box width="100%" component="img" src={news.image} alt={news.title} />
                            </a>
                        </Link>
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
                                <Link href={`/blog/${news.title.replace(' ', '-').toLowerCase()}`}>
                                    <a>
                                        <Typography variant="h4" component="h4">
                                            {news.title}
                                        </Typography>
                                    </a>
                                </Link>
                            </Box>
                            <Typography variant="body1" component="p" sx={styles.Description}>
                                {news.description}
                            </Typography>
                            <Box sx={styles.Button}>
                                <Link href={`/blog/${news.title.replace(' ', '-').toLowerCase()}`}>
                                    <a>
                                        <Typography variant="body1" component="span">
                                            Read more
                                        </Typography>
                                    </a>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                ))
            }
        </Container>
    );
};
export default Card;