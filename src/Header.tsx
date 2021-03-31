import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {Theme, useTheme} from "@material-ui/core";
import React, {useState} from "react";
import {Brightness3, WbSunny} from "@material-ui/icons";

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
  color: ${props => props.color};
  vertical-align: middle;
`;

const Nav = styled.nav<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.palette.background.default};
  height: 80px;
`;

interface Props {
    handleThemeChange: () => void,
}

export const Header = (props: Props) => {
    const theme = useTheme();
    const history = useHistory();

    const historyPush = (url: string) => history.push(url);

    const mainYellow = theme.palette.primary.main;

    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

    const setThemeIcon = () => {
        props.handleThemeChange();
        setIsLightTheme(prev => !prev);
    }

    return (
        <Nav theme={theme}>
            <Ul>
                <Li color={mainYellow} bold onClick={() => historyPush('/projects')}>SZPANEL.PL</Li>
            </Ul>
            <Ul>
                <Li color={mainYellow} onClick={() => setThemeIcon()}>
                    {isLightTheme ? <Brightness3/> : <WbSunny/>}
                </Li>
                <Li color={mainYellow} onClick={() => historyPush('about')}>O mnie</Li>
                <Li color={mainYellow} onClick={() => historyPush('projects')}>Projekty</Li>
                <Li color={mainYellow} onClick={() => historyPush('contact')}>Kontakt</Li>
            </Ul>
        </Nav>
    );
}

export default Header;