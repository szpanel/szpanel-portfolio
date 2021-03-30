import {RouteComponentProps} from "react-router-dom";

interface ProjectProps {
    id: string
}

interface Props extends RouteComponentProps<ProjectProps> {

}

const Project = (props: Props) => {
    return <span>project id: {props.match.params.id}</span>
};

export default Project;