import { Box } from "@mui/material";

//Styles
import styles from "Styles/Utilis/Vector/HeroVector.styles";

const HeroVector = () => {
    return (
        <Box sx={styles.SvgAnimation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="565.556px" height="673.298px" viewBox="0 0 565.556 673.298">
                <path fill="#FED332" d="M 0.00193 297.519 C 0.07193 280.172 2.66693 262.382 8.46093 244.189 C 34.4819 162.48 109.645 125.433 173.01 86.952 C 260.672 33.7159 376.958 -36.9534 456.077 22.9146 C 543.409 88.9966 552.557 164.605 561.148 275.326 C 569.739 386.047 506.528 578.41 391.313 647.783 C 292.276 707.412 207.859 649.664 147.954 579.22 C 88.9896 509.883 -0.434 404.262 0.00193 297.519 C 0.00193 297.519 0.00193 297.519 0.00193 297.519"></path>
            </svg>
        </Box>
    );
};

export default HeroVector;