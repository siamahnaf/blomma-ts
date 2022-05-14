import { useState } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";

//Data
import Portfolios from "Data/Home/Portfolio.data";

//Styles
import styles from "Styles/Home/Portfolio.styles";

//Vector
import PortfolioOne from "Utilis/Vector/PortfolioOne";
import PortfolioTwo from "Utilis/Vector/PortfolioTwo";
import PortfolioThree from "Utilis/Vector/PortfolioThree";

const Portfolio = () => {
    const [vectorOne, setVectorOne] = useState(false);
    const [vectorThree, setVectorThree] = useState(false);
    const onChangeOne = (isVisible: boolean) => {
        if (isVisible) {
            setVectorOne(true)
        }
    }
    const onChangeThree = (isVisible: boolean) => {
        if (isVisible) {
            setVectorThree(true)
        }
    }
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "3em", position: "relative" }}>
            <Box sx={styles.VectorTwo}>
                <PortfolioTwo />
            </Box>
            <Box sx={styles.VectorOne}>
                <VisibilitySensor partialVisibility onChange={onChangeOne}>
                    <Box sx={styles.VectorInner} className={vectorOne ? "visible" : ""}>
                        <PortfolioOne />
                    </Box>
                </VisibilitySensor>
            </Box>
            <Grid container spacing={0}>
                {Portfolios && Portfolios.length > 0 &&
                    Portfolios.map((portfolio, i) => (
                        <Grid item {...{ md: 4, lsm: 6, xxs: 12 }} key={i}>
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
            <Box sx={styles.VectorThree}>
                <VisibilitySensor partialVisibility offset={{ top: 150 }} onChange={onChangeThree}>
                    <Box sx={styles.VectorInner} className={vectorThree ? "visible" : ""}>
                        <PortfolioThree />
                    </Box>
                </VisibilitySensor>
            </Box>
        </Container>
    );
};
export default Portfolio;