import { Container, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

//Data
import Portfolios from "Data/Home/Portfolio.data";

//Styles
import styles from "Styles/Home/Portfolio.styles";

const Portfolio = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "3em" }}>
            <Grid container spacing={0}>
                {Portfolios && Portfolios.length > 0 &&
                    Portfolios.map((portfolio, i) => (
                        <Grid item md={4} key={i}>
                            <Box sx={styles.ImageContainer}>
                                <Link href={portfolio.url}>
                                    <a>
                                        <Box sx={styles.Image} component="img" src={portfolio.image} alt={portfolio.title} />
                                        <Box sx={styles.HoverItem} className="hoveritem">
                                            <Box sx={styles.ItemWraper}>
                                                <Box sx={styles.WrappertText}>
                                                    <Box sx={styles.titleHolder}>
                                                        <Typography variant="h6" component="h6">
                                                            {portfolio.title}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={styles.CategoryHolder}>
                                                        <Typography variant="body1" component="p">
                                                            {portfolio.desc}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </a>
                                </Link>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};
export default Portfolio;