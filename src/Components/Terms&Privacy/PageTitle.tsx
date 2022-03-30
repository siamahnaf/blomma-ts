import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/Terms&Privacy/PageTitle.styles";

type Props = {
    title: string
}

const PageTitle = ({ title }: Props) => {
    return (
        <Box sx={styles.Container}>
            <Box>
                <Typography variant="h3" component="h3" sx={styles.TitleText}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};
export default PageTitle;