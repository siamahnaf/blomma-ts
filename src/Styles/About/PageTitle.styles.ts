//Images
import Bg from "Assets/about-title.jpg";

export default {
    Container: {
        background: `url("${Bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
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
            lsm: "9em",
            sm: "8em",
            xs: "7em",
            xxs: "6em"
        },
        textAlign: "center",
        mb: "4em"
    },
    TitleText: {
        fontWeight: 600,
        color: "background.default",
        fontSize: {
            msm: "60px",
            sm: "50px",
            xs: "45px",
            xxs: "40px"
        },
        mt: {
            xs: 0,
            xxs: "1em"
        }
    }
}