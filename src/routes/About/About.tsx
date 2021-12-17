import {Box, Button, CircularProgress, Grid, makeStyles, Typography, useTheme} from "@material-ui/core";
import styles from "../../styles/_main.module.scss";
import React, {useEffect, useMemo, useRef, useState} from "react";
import Skills from "./Skills";
import {API_URL} from "../../constans";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(() => ({
    logo: {
        cursor: 'pointer',
    },
}));

const About = () => {
    const theme = useTheme();

    const classes = useStyles();

    const btnCVRef = useRef<HTMLButtonElement>(null);
    const [isSubmittingBtnCV, setIsSubmittingBtnCV] = useState<boolean>(false);
    const logoImgRef = useRef<HTMLImageElement>(null);
    const [shouldAnimate, setShouldAnimate] = useState<boolean>(true);

    const ANIMATION_TIME_SECONDS = useMemo(() =>
        parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--animate-duration').trim()
        ), []);

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

    useEffect(() => {
        if (shouldAnimate) {
            animateLogoImg();
        }
    }, [shouldAnimate]);

    const animateLogoImg = () => {
        const classListTokens = ['animate__animated', 'animate__flip'];
        if (!logoImgRef.current) return;
        logoImgRef.current.classList.remove(...classListTokens);
        setTimeout(() => {
            logoImgRef.current?.classList.add(...classListTokens);
        }, 0);
        setTimeout(() => {
            setShouldAnimate(false);
        }, ANIMATION_TIME_SECONDS * 1000);
    }

    return <Box paddingTop={2}>
        <Grid container justifyContent="center" alignItems="center" direction="column">
            <Typography variant="h2" align="center">Łukasz Szpanelewski</Typography>
            <Typography variant="h6" gutterBottom align="center">
                <Typography component="q">{t('aboutMe.quote')}</Typography>
            </Typography>
            <Box
                className={`${styles.circle} ${classes.logo}`}
                style={{backgroundColor: theme.palette.secondary.main}}
                onMouseEnter={() => setShouldAnimate(true)}
            >
                <img
                    ref={logoImgRef}
                    srcSet={theme.palette.type === "dark" ? '/favicon.ico' : '/favicon_blue.ico'}
                    width="100%"
                    height="100%"
                    alt="SZ page icon"/>
            </Box>
        </Grid>
        <Grid container alignItems="center" direction="column" className={styles.verticalMargin}>
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
