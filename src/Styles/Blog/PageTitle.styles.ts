//Images
import Bg from "Assets/blog/title-bg.jpg";

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
            xxs: "-105px",
        },
        py: {
            xxxl: "12em",
            xxl: "10em",
            xl: "9em",
            md: "6.5em",
            lsm: "6em",
            msm: "5.8em",
            sm: "5.7em",
            xs: "5.6em",
            xxs: "5.5em"
        },
        textAlign: "center"
    },
    TitleText: {
        fontWeight: 600,
        color: "text.primary",
        fontSize: {
            sm: "40px",
            xxs: "35px"
        },
        mt: {
            sm: "30px",
            xs: "40px",
            xxs: "50px"
        }
    }
}