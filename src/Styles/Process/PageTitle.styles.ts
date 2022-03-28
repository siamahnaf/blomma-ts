//Background-Images
import Bg from "Assets/process/title-bg.jpg";

export default {
    Container: {
        background: `url("${Bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        mt: "-105px",
        py: "10em"
    },
    TitleText: {
        fontWeight: 600,
        color: "background.default",
        fontSize: "60px"
    }
}