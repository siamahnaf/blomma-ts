import { FC } from "react";
import { Box } from "@mui/material";

//Header & Footer
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    active: string;
    light?: boolean;
}

const Layout: FC<Props> = ({ children, active, light }) => {
    return (
        <Box>
            <Header active={active} light={light} />
            {children}
            <Footer />
        </Box>
    );
};
export default Layout;