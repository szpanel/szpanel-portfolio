import {Box, Button, CircularProgress, Grid, Typography, useTheme} from "@material-ui/core";
import styles from "../../styles/_main.module.scss";
import React, {useRef, useState} from "react";
import Skills from "./Skills";
import {API_URL} from "../../constans";
import {useTranslation} from "react-i18next";

const About = () => {
    const theme = useTheme();

    const btnCVRef = useRef<HTMLButtonElement>(null);
    const [isSubmittingBtnCV, setIsSubmittingBtnCV] = useState<boolean>(false);

    const {t} = useTranslation();

    const handleClick = () => {
        setIsSubmittingBtnCV(true);
        fetch(`${API_URL}/cv`, {
            method: "GET",
        })
            .then(response => response.blob())
            .then(blob => window.URL.createObjectURL(blob))
            .then(url => {
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'LukaszSzpanelewski_resume.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode!.removeChild(link);
                window.URL.revokeObjectURL(url);
            }).then(() => setIsSubmittingBtnCV(false))

    };

    return <Box paddingTop={2}>
        <Grid container justify="center" alignItems="center" direction="column">
            <Typography variant="h2" align="center">Łukasz Szpanelewski</Typography>
            <Typography variant="h6" gutterBottom align="center">
                <Typography component="q">{t('aboutMe.quote')}</Typography>
            </Typography>
            <Box className={styles.circle} style={{backgroundColor: theme.palette.secondary.main}}>
                <img srcSet={theme.palette.type === "dark" ? '/favicon.ico' : '/favicon_blue.ico'}
                     width="100%"
                     height="100%"
                     alt="SZ page icon"/>
            </Box>
        </Grid>
        <Grid container alignItems="center" direction="column" style={{marginBottom: "16px"}}>
            <Grid item xs={12} md={8} lg={6}>
                <Typography component="p" align="justify">
                    {t('aboutMe.description')}
                </Typography>
            </Grid>
            <Box m={2}>
                <Button disabled={true}
                        onClick={handleClick}
                        ref={btnCVRef} size="large"
                        variant="outlined"
                >
                    {isSubmittingBtnCV ? <CircularProgress color="primary" size={35}/> : t('aboutMe.downloadCv')}
                </Button>
            </Box>
            <em>{t('aboutMe.latestUpdate', {date: "03.04.2021"})}</em>
        </Grid>
        <Skills/>
    </Box>
};

export default About;
