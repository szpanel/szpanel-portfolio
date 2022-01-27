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
import {load} from "recaptcha-v3";
import {API_URL, GOOGLE_RECAPTCHA_SITE_KEY} from "../constans";
import Alerts, {useAlerts} from "../Alerts";
import {useTranslation} from "react-i18next";

interface IContactForm {
    recipient: string,
    topic: string,
    email: string,
    content: string,
    test: boolean,
}

interface ContactResponse {
    success: boolean,
    error: any
}

/** FORMIK **/

const initialValues = {
    recipient: "",
    topic: 'NONE',
    email: "",
    content: "",
    test: false,
}

const validationSchema = Yup.object().shape({
    recipient: Yup.string()
        .required('contactForm.validation.introduceYourself'),
    email: Yup.string().email('contactForm.validation.invalidEmail')
        .required('contactForm.validation.emptyEmail'),
    topic: Yup.mixed().not(['NONE'], 'contactForm.validation.topic'),
    content: Yup.string().required('contactForm.validation.content')
});

/** COMPONENT **/

const Contact = () => {

    const [alertList, addAlert, removeAlert] = useAlerts();
    const {t} = useTranslation();

    const onSubmit = async (
        values: IContactForm,
        {setSubmitting, resetForm}: FormikHelpers<any>
    ) => {
        setSubmitting(true);
        try {
            const recaptchaResponse = await (await load(GOOGLE_RECAPTCHA_SITE_KEY)).execute("submit");
            const response = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({token: recaptchaResponse, ...values})
            });
            const {success} = await (response.json()) as ContactResponse;
            const alertType = success ? (values.test ? 'info' : 'success') : 'error';
            const alertMessage = success ?
                (
                    values.test ? t('contactForm.testResponseMessage')
                        : t('contactForm.emailSuccessfullySent')
                )
                : t('contactForm.errorSendingEmail');
            addAlert({
                type: alertType,
                message: alertMessage
            });
            resetForm();
            setSubmitting(false);
        } catch (error) {
            addAlert({
                type: 'error',
                message: t('contactForm.errorSendingEmail'),
            });
            console.log(`'Error occurred while sending email: ${error}`);
            setSubmitting(false);
        }
    }

    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                {t('contactForm.caption')}
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
                                label={t('contactForm.introduceYourself')}
                                variant="filled"
                                value={values.recipient}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.recipient && Boolean(errors.recipient)}
                                helperText={touched.recipient && t(errors.recipient as string)}
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
                            <FormControl variant="filled" fullWidth error={touched.topic && !!errors.topic}>
                                <InputLabel id="topicLabel">{t('contactForm.topic')}</InputLabel>
                                <Field
                                    component={Select}
                                    labelId="topicLabel"
                                    id="topic"
                                    name="topic"
                                    value={t(values.topic)}
                                    onChange={handleChange("topic")}
                                    onBlur={handleBlur("topic")}
                                    error={touched.topic && Boolean(errors.topic)}>
                                    {Object.entries(t('contactForm.topics', {returnObjects: true}))
                                        .map(([key, value]) =>
                                            <MenuItem
                                                key={key}
                                                value={key as string}>
                                                {value as string}
                                            </MenuItem>
                                        )}
                                </Field>
                                <FormHelperText>{touched.topic && t(errors.topic as string)}</FormHelperText>
                            </FormControl>
                        </Box>
                        <Box p={1} width={1}>
                            <Field
                                component={TextField}
                                id="email"
                                name="email"
                                label={t('contactForm.contactEmail')}
                                variant="filled"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && t(errors.email as string)}
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
                                label={t('contactForm.content')}
                                variant="filled"
                                onBlur={handleBlur}
                                value={values.content}
                                onChange={handleChange}
                                error={touched.content && Boolean(errors.content)}
                                helperText={touched.content && t(errors.content as string)}
                                multiline
                                fullWidth
                                rows={5}/>
                        </Box>
                        <Box p={1} width={1}>
                            <label>
                                <Field
                                    style={{marginRight: 8}}
                                    type='checkbox'
                                    name='test'
                                />
                                {t('contactForm.testingInfo')}
                            </label>
                        </Box>
                        <Box p={1} width={1}>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                variant="outlined"
                                color="primary"
                                size="large"
                                fullWidth
                            >
                                {
                                    !isSubmitting ? t('contactForm.sendBtn') : t('contactForm.sendingBtn')
                                }
                            </Button>
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
