import { Box, Grid, InputBase, Typography, ButtonBase } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/Common/Form.styles";

type Inputs = {
    name: string;
    email: string;
    message: string;
}

const Form = () => {
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={2} rowSpacing={3}>
                <Grid item {...{ lsm: 6, xxs: 12 }}>
                    <Box>
                        <InputBase
                            placeholder="Name"
                            fullWidth
                            {...register("name",
                                {
                                    required: "Please Enter Your Name!"
                                }
                            )}
                            sx={styles.InputBase}
                        />
                        {errors.name && (
                            <Typography variant='body1' component='p' sx={styles.ErrorText}>
                                <Icon icon='fluent:error-circle-12-filled' />
                                {errors.name.message}
                            </Typography>
                        )}
                    </Box>
                </Grid>
                <Grid item {...{ lsm: 6, xxs: 12 }}>
                    <Box>
                        <InputBase
                            placeholder="Email"
                            fullWidth
                            {...register("email",
                                {
                                    required: "Please enter an email addreess!",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "The email you enter is invalid email!",
                                    },
                                }
                            )}
                            sx={styles.InputBase}
                        />
                        {errors.email && (
                            <Typography variant='body1' component='p' sx={styles.ErrorText}>
                                <Icon icon='fluent:error-circle-12-filled' />{errors.email.message}
                            </Typography>
                        )}
                    </Box>
                </Grid>
                <Grid item {...{ xxs: 12 }}>
                    <Box>
                        <InputBase
                            placeholder="Message"
                            fullWidth
                            multiline
                            maxRows={5}
                            minRows={5}
                            {...register(
                                'message',
                                {
                                    required: 'Please add your message!',
                                    minLength: {
                                        value: 25,
                                        message: 'Message should not be less than 25 characters!',
                                    },
                                    maxLength: {
                                        value: 1000,
                                        message: 'Message should not be more than 1000 characters!'
                                    }
                                }
                            )}
                            sx={styles.InputBase}
                        />
                        {errors.message && (
                            <Typography variant='body1' component='p' sx={styles.ErrorText}>
                                <Icon icon='fluent:error-circle-12-filled' />{errors.message.message}
                            </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <ButtonBase type="submit" sx={styles.Button}>
                Order now
            </ButtonBase>
        </Box>
    );
};
export default Form;