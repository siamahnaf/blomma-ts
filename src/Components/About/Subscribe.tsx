import { Container, Stack, Box, Typography, InputBase, ButtonBase } from "@mui/material";
import { Icon } from "@iconify/react";
import { useForm, SubmitHandler } from "react-hook-form";

//Styles
import styles from "Styles/About/Subscribe.styles";

//Types
type Inputs = {
    subscribe: string
}

const Subscribe = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
        reset();
    };
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                Subscribe_
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            </Typography>
            <Stack direction="row" component="form" sx={{ justifyContent: "center", mt: "3em" }} onSubmit={handleSubmit(onSubmit)}>
                <InputBase
                    placeholder="Email"
                    sx={styles.InputBox}
                    {...register("subscribe", { required: true })}
                />
                <ButtonBase type="submit" sx={styles.Button}>
                    Subscribe
                </ButtonBase>
            </Stack>
            <Box sx={styles.ErrorMessage}>
                {errors.subscribe && (
                    <Typography variant="body1" component="p">
                        <Icon icon='fluent:error-circle-12-filled' />
                        Please add Your request content!
                    </Typography>
                )}
            </Box>
        </Container>
    );
};
export default Subscribe;