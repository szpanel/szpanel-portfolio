import {Box, Button, CircularProgress, Grid, Typography, useTheme} from "@material-ui/core";
import styles from "../../styles/_main.module.scss";
import React, {useRef, useState} from "react";
import Skills from "./Skills";
import {API_URL} from "../../constans";

const About = () => {
    const theme = useTheme();

    const btnCVRef = useRef<HTMLButtonElement>(null);
    const [isSubmittingBtnCV, setIsSubmittingBtnCV] = useState<boolean>(false);

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
            <Typography variant="h2">Łukasz Szpanelewski</Typography>
            <Typography variant="h6" gutterBottom>
                <Typography component="q">The best way to predict the future is to create it.</Typography>
            </Typography>
            <Box className={styles.circle} style={{backgroundColor: theme.palette.secondary.main}}>
                <img src={theme.palette.type === "dark" ? '/favicon.ico' : '/favicon_blue.ico'}
                     width="100%"
                     height="100%"
                     alt="SZ page icon"/>
            </Box>
        </Grid>
        <Grid container alignItems="center" direction="column" style={{marginBottom: "16px"}}>
            <Grid item xs={8}>
                <Typography component="p" align="justify">
                    Dzień dobry 👋<br/>
                    Swoją prawidzwą przygodę z programowaniem rozpocząłem pod koniec 2017 roku wraz z rozpoczęciem
                    studiów. Pierwszymi poznanymi przeze mnie językami programowania były: C++, HTML/CSS/JS. W
                    trakcie
                    studiów wybrałem specjalizację Systemy i Aplikacje Mobilne, gdzie zacząłem rozwijać się w
                    kierunku Javy. Język ten spodobał mi się do tego stopnia, że do niedawna tj. do javy 15,
                    musiałem
                    wiedzieć o wszystkich wdrożonych nowościach. Po drodze
                    poznałem wiele interesujących mnie technologii i frameworków. Zawsze podobała mi się prostota
                    pisania kodu w JS, a jednocześnie frustruwał mnie fakt, że jest to język typowany statycznie.
                    Moje
                    podejście do tego języka zmieniło się w momencie, w którym poznałem technologię jaką jest
                    Typescript. Środowisko te sprawia, że świetnie odnajduję się jako programista JS czy Node.js i
                    aktualnie rozwijam się w tym kierunu.
                </Typography>
            </Grid>
            <Box m={2}>
                <Button disabled={isSubmittingBtnCV} onClick={handleClick} ref={btnCVRef} size="large"
                        variant="outlined">
                    {isSubmittingBtnCV ? <CircularProgress color="primary" size={35}/> : `Pobierz MOJE CV`}</Button>
            </Box>
            <em>Ostatnia aktualizacja CV: 03.04.2021</em>
        </Grid>
        <Skills/>
    </Box>
};

export default About;