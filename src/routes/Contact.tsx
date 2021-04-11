import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel, Link,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {Email, Face} from "@material-ui/icons";
import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import * as Yup from "yup";
import {load} from "recaptcha-v3";
import {API_URL, SITE_KEY} from "../constans";
import Alerts, {useAlerts} from "../Alerts";

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

interface ContactRecaptchaResponse {
    success: boolean,
    message: string
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

/** COMPONENT **/

const Contact = () => {

    const [alertList, addAlert, removeAlert] = useAlerts();

    const onSubmit = async (values: IContactForm, {setSubmitting}: FormikHelpers<any>) => {
        setSubmitting(true);
        const response = await (await load(SITE_KEY)).execute("submit");
        fetch(`${API_URL}/contact`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token: response, ...values})
        }).then(result => result.json())
            .then(result => result as ContactRecaptchaResponse)
            .then(response =>
                addAlert({type: response.success ? "success" : "error", message: response.message})
            );
    }

    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Formularz kontaktowy
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" my={2}>
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
                    <Form style={{width: "100%"}}>
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
                                onChange={handleChange}
                                error={touched.content && Boolean(errors.content)}
                                helperText={touched.content && errors.content}
                                multiline
                                fullWidth
                                rows={5}/>
                        </Box>
                        <Box p={1} width={1}>
                            <em>Formularz kontaktowy tymczasowo wyłączony. Skontaktuj się ze
                                mną bezpośrednio poprzez email:&nbsp;
                                <Link color="primary" href="mailto:szpanelek@gmail.com">szpanelek@gmail.com</Link>
                            </em>
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
            <Alerts alerts={alertList} removeAlert={removeAlert}/>
        </Box>
    )
};

export default Contact;