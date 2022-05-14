//Background-Images
import Bg from "Assets/contact-bg.jpg";

export default {
    Container: {
        background: `url("${Bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        mt: {
            xxxl: "-125px",
            xxl: "-115px",
            xl: "-110px",
            xxs: "-105px"
        },
        py: {
            xxxl: "15em",
            xxl: "13em",
            xl: "12em",
            lg: "10em",
            md: "8em",
            smd: "8.5em",
            sm: "8em",
            xxs: "6em"
        },
    },
    TitleText: {
        fontWeight: 600,
        color: "background.default",
        fontSize: {
            msm: "60px",
            sm: "45px",
            xs: "40px",
            xxs: "35px"
        },
        mt: {
            sm: 0,
            xs: "1em",
            xxs: "1em"
        }
    }
}