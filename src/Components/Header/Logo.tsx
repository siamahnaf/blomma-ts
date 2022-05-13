import { Box } from "@mui/material";
import Link from "next/link";

//Logo
import LogoImage from "Assets/logo.png";
import LogoWhite from "Assets/logo-white.png";

//Styles
import styles from "Styles/Header/Logo.styles";

//Types
interface Props {
    light?: boolean;
}

const Logo = ({ light }: Props) => {
    return (
        <Box>
            <Link href="/">
                <a>
                    {light ? (
                        <Box sx={styles.Logo} component="img" src={LogoWhite} alt="Logo" />
                    ) : (
                        <Box sx={styles.Logo} component="img" src={LogoImage} alt="Logo" />
                    )}
                </a>
            </Link>
        </Box>
    );
};
export default Logo;