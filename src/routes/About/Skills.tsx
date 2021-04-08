import {Box, Grid, LinearProgress, Theme, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {createStyles, withStyles} from "@material-ui/styles";

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
    SPRING = "Spring",
    GIT = "Git",
    KOTLIN = "Kotlin",
    JAVASCRIPT = "JavaScript",
    ANDROID = "Android",
    REACT = "React",
    NODE = "Node.JS",
    HTMLCSS = "HTML/CSS/JS",
    LINUX = "Linux",
    CPP = "C++",
    PHP = "Php",
    JIRA = "Jira",
    AWS = "AWS S3",
    MONGO = "Mongo",
    MYSQL = "MySQL",
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
            max: 80
        },
        [Skill.SPRING]: {
            current: 0,
            max: 30
        },
        [Skill.GIT]: {
            current: 0,
            max: 50
        },
        [Skill.KOTLIN]: {
            current: 0,
            max: 25
        },
        [Skill.JAVASCRIPT]: {
            current: 0,
            max: 75
        },
        [Skill.ANDROID]: {
            current: 0,
            max: 35
        },
        [Skill.REACT]: {
            current: 0,
            max: 45
        },
        [Skill.NODE]: {
            current: 0,
            max: 35
        },
        [Skill.HTMLCSS]: {
            current: 0,
            max: 60
        },
        [Skill.LINUX]: {
            current: 0,
            max: 45
        },
        [Skill.CPP]: {
            current: 0,
            max: 10
        },
        [Skill.PHP]: {
            current: 0,
            max: 15
        },
        [Skill.JIRA]: {
            current: 0,
            max: 15
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
            max: 35
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
        <Typography variant="h3" gutterBottom>Umiejętności</Typography>
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