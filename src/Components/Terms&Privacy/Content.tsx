import { Box } from "@mui/material";
import parse from 'html-react-parser';

type Props = {
    item: string
}

const Content = ({ item }: Props) => {
    return (
        <Box>
            {parse(item)}
        </Box>
    );
};
export default Content;