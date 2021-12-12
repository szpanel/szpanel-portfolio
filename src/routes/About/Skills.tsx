import {Box, Grid, LinearProgress, Theme, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {createStyles, withStyles} from "@material-ui/styles";
import {useTranslation} from "react-i18next";

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 20,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
    }),
)(LinearProgress);

enum Skill {
    FIREBASE = "Firebase",
    JAVA = "Java",
    GIT = "Git",
    KOTLIN = "Kotlin",
    JAVASCRIPT = "JavaScript",
    ANDROID = "Android",
    REACT = "React",
    REACT_NATIVE = "React Native",
    NODE = "Node.JS",
    JIRA = "Jira",
    AWS = "AWS S3",
    MONGO = "Mongo",
    MYSQL = "MySQL",
    GRAPHQL = "GraphQL",
}

interface SkillMeta {
    current: number,
    max: number
}

const Skills = () => {

    const [skills, setSkills] = useState<Record<Skill, SkillMeta>>({
        [Skill.FIREBASE]: {
            current: 0,
            max: 85
        },
        [Skill.JAVA]: {
            current: 0,
            max: 65
        },
        [Skill.GIT]: {
            current: 0,
            max: 65
        },
        [Skill.KOTLIN]: {
            current: 0,
            max: 25
        },
        [Skill.JAVASCRIPT]: {
            current: 0,
            max: 95
        },
        [Skill.ANDROID]: {
            current: 0,
            max: 40
        },
        [Skill.REACT]: {
            current: 0,
            max: 70
        },
        [Skill.REACT_NATIVE]: {
            current: 0,
            max: 65
        },
        [Skill.NODE]: {
            current: 0,
            max: 55
        },
        [Skill.JIRA]: {
            current: 0,
            max: 50
        },
        [Skill.AWS]: {
            current: 0,
            max: 40
        },
        [Skill.MONGO]: {
            current: 0,
            max: 45
        },
        [Skill.MYSQL]: {
            current: 0,
            max: 45
        },
        [Skill.GRAPHQL]: {
            current: 0,
            max: 40
        },
    });


    const loadSkills = () => {
        const maxVal = Math.max.apply(Math, Object.values(skills).map((o) => o.max));
        const interval = setInterval(() => {
            // @ts-ignore
            setSkills((prevState) => Object.entries(prevState)
                .reduce((acc: Record<string, SkillMeta>, [k, v]) => {
                    if (v.current >= maxVal) {
                        clearInterval(interval);
                        acc[k] = v;
                    } else if (v.current < v.max) {
                        acc[k] = {
                            current: v.current + 1,
                            max: v.max
                        };
                    } else {
                        acc[k] = v;
                    }
                    return acc;
                }, {})
            );
        }, 20);
    };

    const {t} = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                loadSkills();
                window.removeEventListener("scroll", handleScroll);
            }
        }
        window.addEventListener("scroll", handleScroll);
        /* eslint-disable */
    }, []);

    return <Box marginTop={2}>
        <Typography variant="h3" gutterBottom>{t('skills')}</Typography>
        <Grid container spacing={2}>
            {Object.entries(skills)
                .map(([k, v]) =>
                    <Grid key={k} item xs={12} md={6} lg={4}>
                        <Box fontWeight="fontWeightBold">{k}</Box>
                        <BorderLinearProgress variant="determinate" value={v.current}/>
                    </Grid>
                )}
        </Grid>
    </Box>
}

export default Skills;
