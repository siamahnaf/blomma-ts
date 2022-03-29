import { Container, Box, Typography, ButtonBase } from "@mui/material";
import { Masonry } from "@mui/lab";
import Link from "next/link";

//Data
import Portfolios from "Data/Portfolio/Portfolios.data";

//Styles
import styles from "Styles/Portfolio/Masonrys.styles";

const Masonrys = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "8em" }}>
            <Masonry columns={3} spacing={2}>
                {Portfolios && Portfolios.length > 0 &&
                    Portfolios.map((portfolio, i) => (
                        <Box sx={styles.ImageContainer} key={i}>
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
                                                        {portfolio.sub}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    ))
                }
            </Masonry>
            <Box sx={styles.Button}>
                <ButtonBase >
                    Load more
                </ButtonBase>
            </Box>
        </Container >
    );
};
export default Masonrys;