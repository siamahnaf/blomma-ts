import { Box } from "@mui/material";
import Link from "next/link";

//Logo
import LogoImage from "Assets/logo.png";
import LogoWhite from "Assets/logo-white.png";

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
                        <Box width="140px" component="img" src={LogoWhite} alt="Logo" />
                    ) : (
                        <Box width="140px" component="img" src={LogoImage} alt="Logo" />
                    )}
                </a>
            </Link>
        </Box>
    );
};
export default Logo;