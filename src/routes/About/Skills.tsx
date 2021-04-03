import {Box, Grid, LinearProgress, Theme, Typography} from "@material-ui/core";
import React from "react";
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

const Skills = () => {
    return <Box marginTop={2}>
        <Typography variant="h3" gutterBottom>Umiejętności</Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Firebase</Box>
                <BorderLinearProgress variant="determinate" value={85}/>
            </Grid>

            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Java</Box>
                <BorderLinearProgress variant="determinate" value={80}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Spring</Box>
                <BorderLinearProgress variant="determinate" value={30}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Git</Box>
                <BorderLinearProgress variant="determinate" value={50}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Kotlin</Box>
                <BorderLinearProgress variant="determinate" value={25}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">JavaScript</Box>
                <BorderLinearProgress variant="determinate" value={75}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Android App Dev</Box>
                <BorderLinearProgress variant="determinate" value={35}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">React</Box>
                <BorderLinearProgress variant="determinate" value={45}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Node.js</Box>
                <BorderLinearProgress variant="determinate" value={35}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">HTML/CSS</Box>
                <BorderLinearProgress variant="determinate" value={60}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Linux</Box>
                <BorderLinearProgress variant="determinate" value={45}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">C++</Box>
                <BorderLinearProgress variant="determinate" value={10}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">PHP</Box>
                <BorderLinearProgress variant="determinate" value={15}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">JIRA</Box>
                <BorderLinearProgress variant="determinate" value={15}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Kotlin</Box>
                <BorderLinearProgress variant="determinate" value={25}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">Amazon AWS</Box>
                <BorderLinearProgress variant="determinate" value={40}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">MongoDB</Box>
                <BorderLinearProgress variant="determinate" value={45}/>
            </Grid>
            <Grid item xs={6}>
                <Box fontWeight="fontWeightBold">MySQL</Box>
                <BorderLinearProgress variant="determinate" value={35}/>
            </Grid>
        </Grid>
    </Box>
}

export default Skills;