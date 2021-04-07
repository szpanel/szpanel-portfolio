import styled from "styled-components";
import {Avatar, Box, Chip, Theme, Typography, useTheme} from "@material-ui/core";
import {Technology} from "./ITechnology";

export interface IProject {
    title: string,
    img?: string,
    technologies: Technology[],
    description: string,
    source?: string
}

const ProjectContainer = styled.div<{ theme: Theme }>`
  background-color: ${props => props.theme.palette.secondary.main};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div<{ img: string }>`
  background-image: url(" ${props => props.img} ");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 56.25%;
  opacity: 1;
  transition: opacity 1s;
`;

const Technologies = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  opacity: 0;
  flex-direction: column;
  transition: opacity 750ms;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 8px;
  width: 100%;
`;

const ProjectDescription = styled.div`
  padding: 16px;
  text-align: justify;
  display: flex;
  align-items: center;

`

const Separator = styled.hr<{ theme: Theme }>`
  margin: 8px 8px 16px;
  border: 1px solid ${props => props.theme.palette.primary.main};
`;

const ImageContainer = styled.div`
  position: relative;

  &:hover {
    .project-image {
      opacity: 0.1;
      transition: opacity 500ms;
    }

    .project-technologies {
      opacity: 1;
      transition: opacity 750ms;
    }
  }
`;

const Project = (props: IProject) => {
    const theme = useTheme();
    return <ProjectContainer theme={theme}>
        <Box p={2}>
            <Typography variant="h5" align="center" color="primary">{props.title}</Typography>
        </Box>
        <Separator theme={theme}/>

        <ImageContainer>
            <Image className="project-image" img={props.img!!}/>
            <Technologies className="project-technologies">
                <em>Użyte technologie</em>
                <Box display="flex"
                     flexWrap="wrap"
                     gridGap="16px"
                     flexGrow="flex-start"
                     justifyContent="center"
                     p={1}>
                    {props.technologies.filter(technology => !technology.isGlobalTechnology())
                        .map((technology) =>
                            <Chip
                                onClick={() => {
                                    window.open(technology.source)
                                }}
                                key={`${props.title}/${technology.displayName}`}
                                label={technology.displayName}
                                avatar={<Avatar variant="rounded" alt={technology.displayName}
                                                src={technology.iconPath}/>}/>
                        )}
                </Box>
            </Technologies>
        </ImageContainer>
        <ProjectDescription>{props.description}</ProjectDescription>
    </ProjectContainer>
};

export default Project;