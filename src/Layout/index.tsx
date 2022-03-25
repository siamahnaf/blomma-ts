import { FC } from "react";
import { Box } from "@mui/material";

//Header & Footer
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    active: string
}

const Layout: FC<Props> = ({ children, active }) => {
    return (
        <Box>
            <Header active={active} />
            {children}
            <Footer />
        </Box>
    );
};
export default Layout;