import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {Theme, useTheme} from "@material-ui/core";
import React, {useState} from "react";
import {Brightness3, WbSunny} from "@material-ui/icons";
import styles from "./styles/_variables.module.scss";

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
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.palette.background.default};
  height: ${styles.headerHeight};
`;

interface Props {
    handleThemeChange: () => void,
}

export const Header = (props: Props) => {
    const theme = useTheme();
    const history = useHistory();

    const historyPush = (url: string) => history.push(url);

    const primaryMain = theme.palette.primary.main;

    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

    const setThemeIcon = () => {
        props.handleThemeChange();
        setIsLightTheme(prev => !prev);
    }

    return (
        <Nav theme={theme}>
            <Ul>
                <Li color={primaryMain} bold onClick={() => historyPush('/projects')}>SZPANEL.PL</Li>
            </Ul>
            <Ul>
                <Li color={primaryMain} onClick={() => setThemeIcon()}>
                    {isLightTheme ? <Brightness3/> : <WbSunny/>}
                </Li>
                <Li color={primaryMain} onClick={() => historyPush('about')}>O mnie</Li>
                <Li color={primaryMain} onClick={() => historyPush('projects')}>Projekty</Li>
                <Li color={primaryMain} onClick={() => historyPush('contact')}>Kontakt</Li>
            </Ul>
        </Nav>
    );
}

export default Header;