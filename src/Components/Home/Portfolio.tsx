import { Container, Grid, Box, Typography } from "@mui/material";

//Data
import Portfolios from "Data/Home/Portfolio.data";

const Portfolio = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container spacing={0}>
                {Portfolios && Portfolios.length > 0 &&
                    Portfolios.map((portfolio, i) => (
                        <Grid item md={4} key={i}>
                            <Box>
                                <Box component="img" width="100%" src={portfolio.image} alt={portfolio.title} />
                                <Box>
                                    <Typography variant="h6" component="h6">
                                        {portfolio.title}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {portfolio.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};
export default Portfolio;