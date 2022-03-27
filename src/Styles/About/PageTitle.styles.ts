//Images
import Bg from "Assets/about-title.jpg";

export default {
    Container: {
        background: `url("${Bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        mt: "-105px",
        py: "10em",
        textAlign: "center",
        mb: "4em"
    },
    TitleText: {
        fontWeight: 600,
        color: "background.default",
        fontSize: "60px"
    }
}