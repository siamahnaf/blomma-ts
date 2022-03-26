import { Box } from "@mui/material";

//Logo
import LogoImage from "Assets/logo.png";

const Logo = () => {
    return (
        <Box>
            <Box width="140px" component="img" src={LogoImage} alt="Logo" />
        </Box>
    );
};
export default Logo;