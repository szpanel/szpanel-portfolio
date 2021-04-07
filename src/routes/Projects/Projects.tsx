import {Box, Chip, Grid, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {Done} from "@material-ui/icons";
import {projects} from "./projectsList";
import {Technology} from "./ITechnology";
import Project, {IProject} from "./Project";

const Projects = () => {

    const [projectsFilter, setProjectsFilter] = useState<Technology>(Technology.ALL);

    const handleClick = (filter: Technology) => {
        if (filter !== projectsFilter) {
            setProjectsFilter(filter);
        }
    }

    const deleteFilter = () => setProjectsFilter(Technology.ALL);


    return <Box paddingTop={2}>
        <Typography variant="h3" gutterBottom>Projekty</Typography>
        <Box display="flex" flexDirection="row" justifyContent="center" gridGap={10} flexWrap="wrap">
            {Object.values(Technology).map((technology: Technology) =>
                <Chip
                    key={technology.displayName}
                    label={technology.displayName}
                    clickable
                    onClick={() => handleClick(technology)}
                    color={technology === projectsFilter ? "primary" : "secondary"}
                    onDelete={technology === projectsFilter && technology !== Technology.ALL ? deleteFilter : undefined}
                    deleteIcon={technology === projectsFilter ? undefined : <Done/>}
                />
            )}
        </Box>
        <Box my={2}>
            <Grid container spacing={2}>
                {projects.map((project: IProject) =>
                    project.technologies.includes(projectsFilter) || projectsFilter === Technology.ALL ?
                        <Grid key={project.title}
                              item
                              xs={12}
                              md={6}> <Project {...project}/></Grid> : undefined
                )}
            </Grid>
        </Box>
    </Box>
};

export default Projects;