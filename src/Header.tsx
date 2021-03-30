import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useTheme} from "@material-ui/core";

const Ul = styled.ul`
  padding: 20px;
  list-style-type: none;
  text-transform: uppercase;
`;

const Li = styled.li<{ bold?: boolean, color?: string }>`
  display: inline-block;
  cursor: pointer;
  margin-right: 15px;
  font-weight: ${props => props.bold ? 'bold' : ''};
  color: ${props => props.color}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #282828;
  height: 80px;
`;

export const Header = () => {
    const theme = useTheme();
    const history = useHistory();

    const historyPush = (url: string) => history.push(url);

    const mainYellow = theme.palette.primary.main;

    return (
        <Nav>
            <Ul>
                <Li color={mainYellow} bold onClick={() => historyPush('/projects')}>SZPANEL.PL</Li>
            </Ul>
            <Ul>
                <Li color={mainYellow} onClick={() => historyPush('about')}>O mnie</Li>
                <Li color={mainYellow} onClick={() => historyPush('projects')}>Projekty</Li>
                <Li color={mainYellow} onClick={() => historyPush('contact')}>Kontakt</Li>
            </Ul>
        </Nav>
    );
}

export default Header;