import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { FacebookShareButton, TwitterShareButton, TumblrShareButton, PinterestShareButton } from "react-share";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/SingleBlog/Share.styles";

const Share = () => {
    const [host, setHost] = useState("");
    const router = useRouter();
    useEffect(() => {
        setHost(window.location.host + router.asPath)
    })
    return (
        <Box sx={styles.Button}>
            <FacebookShareButton url={host}>
                <Icon icon="fa-brands:facebook-f" />
            </FacebookShareButton>
            <TwitterShareButton url={host}>
                <Icon icon="fa-brands:twitter" />
            </TwitterShareButton>
            <TumblrShareButton url={host}>
                <Icon icon="fa-brands:tumblr" />
            </TumblrShareButton>
            <PinterestShareButton url={host} media="https://neilpatel.com/wp-content/uploads/2017/09/Pinterest.jpg">
                <Icon icon="fa-brands:pinterest-p" />
            </PinterestShareButton>
        </Box>
    );
};
export default Share;