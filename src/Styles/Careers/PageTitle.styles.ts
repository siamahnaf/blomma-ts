//Images
import Bg from "Assets/careers.jpg";

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
            sm: "8em",
            xxs: "6em"
        },
        textAlign: "center"
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