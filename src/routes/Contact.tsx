import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {Email, Face} from "@material-ui/icons";
import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "../styles/_variables.module.scss";

enum Topic {
    NONE = "Wybierz temat",
    ORDER = "Zlecenie",
    QUESTION = "Pytanie",
    OTHER = "Inny"
}

interface IContactForm {
    recipient: string,
    topic: Topic,
    email: string,
    content: string,
}

/** FORMIK **/

const initialValues = {
    recipient: "",
    topic: Topic.NONE,
    email: "",
    content: ""
}

const validationSchema = Yup.object().shape({
    recipient: Yup.string()
        .required("Zostaw po sobie chociaż nick"),
    email: Yup.string().email("Nieprawidłowy email")
        .required("Daj mi możliwość odpowiedzenia Ci w jakiś sposób"),
    topic: Yup.mixed().not([Topic.NONE], "O czym rozmawiamy?"),
    content: Yup.string().required("Nie zapomniałeś/aś o czymś? :)")
});

const onSubmit = (values: IContactForm, {setSubmitting}: FormikHelpers<any>) => {
    console.warn('submitted');
    setSubmitting(true);
    console.log(`values\n${values}`);
    setTimeout(() => setSubmitting(false), 5000);
}

/** COMPONENT **/

const Contact = () => {
    return (
        <Box display="flex" className={styles.content} justifyContent="center" alignItems="center">
            <Box width="70vw">
                <Typography variant="h3" gutterBottom color="primary">
                    Formularz kontaktowy
                </Typography>
                <Formik
                    validateOnChange
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >{({
                       isSubmitting
                       , touched
                       , errors
                       , handleChange
                       , handleBlur
                       , values
                   }) => (
                    <Form>
                        <Box p={1} width={1}>
                            <Field
                                component={TextField}
                                id="recipient"
                                name="recipient"
                                label="Przedstaw się"
                                variant="filled"
                                value={values.recipient}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.recipient && Boolean(errors.recipient)}
                                helperText={touched.recipient && errors.recipient}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Face/>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth/>
                        </Box>
                        <Box p={1} width={1}>
                            <FormControl variant="filled" fullWidth error={errors.topic != null}>
                                <InputLabel id="topicLabel">Temat</InputLabel>
                                <Field
                                    component={Select}
                                    labelId="topicLabel"
                                    id="topic"
                                    name="topic"
                                    value={values.topic}
                                    onChange={handleChange("topic")}
                                    onBlur={handleBlur("topic")}
                                    error={touched.topic && Boolean(errors.topic)}>
                                    <MenuItem key={Topic.NONE} value={Topic.NONE}>
                                        <em>{Topic.NONE}</em>
                                    </MenuItem>
                                    {Object.entries(Topic).map(([key, value]) =>
                                        value !== Topic.NONE &&
                                        <MenuItem key={key} value={value}>{value}</MenuItem>
                                    )}
                                </Field>
                                <FormHelperText>{errors.topic && errors.topic}</FormHelperText>
                            </FormControl>
                        </Box>
                        <Box p={1} width={1}>
                            <Field
                                component={TextField}
                                id="email"
                                name="email"
                                label="Email kontaktowy"
                                variant="filled"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email/>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth/>
                        </Box>
                        <Box p={1} width={1}>
                            <Field
                                component={TextField}
                                id="content"
                                name="content"
                                label="Treść"
                                variant="filled"
                                onBlur={handleBlur}
                                value={values.content}
                                error={touched.content && Boolean(errors.content)}
                                helperText={touched.content && errors.content}
                                multiline
                                fullWidth
                                rows={5}/>
                        </Box>
                        <Box p={1} width={1}>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                variant="outlined"
                                color="primary"
                                size="large"
                                fullWidth>Wyślij</Button>
                        </Box>
                    </Form>
                )}
                </Formik>
            </Box>
        </Box>
    )
};

export default Contact;