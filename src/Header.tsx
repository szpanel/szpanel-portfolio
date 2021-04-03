import styled from "styled-components";
import {Theme, useTheme} from "@material-ui/core";
import React, {useState} from "react";
import {Brightness3, WbSunny} from "@material-ui/icons";
import styles from "./styles/_main.module.scss";

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
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.palette.secondary.main};
  height: ${styles.headerHeight};
  font-weight: bold;
  font-size: 18px;
`;

interface Props {
    handleThemeChange: () => void,
    handleMenuClick: (menuOption: Menu) => void,
}

export enum Menu {
    About = "about",
    Projects = "projects",
    Contact = "contact"
}

export const Header = (props: Props) => {
    const theme = useTheme();

    const primaryMain = theme.palette.primary.main;

    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

    const setThemeIcon = () => {
        props.handleThemeChange();
        setIsLightTheme(prev => !prev);
    }

    return (
        <Nav theme={theme}>
            <Ul>
                <Li><img alt="Page icon" src={theme.palette.type === "dark" ? "/favicon.ico" : "/favicon_blue.ico"}
                         width="36px"
                         height="36px"/></Li>
                <Li color={primaryMain} bold onClick={() => props.handleMenuClick(Menu.About)}>SZPANEL.PL</Li>
            </Ul>
            <Ul>
                <Li color={primaryMain} onClick={() => setThemeIcon()}>
                    {isLightTheme ? <Brightness3/> : <WbSunny/>}
                </Li>
                <Li color={primaryMain} onClick={() => props.handleMenuClick(Menu.About)}>O mnie</Li>
                <Li color={primaryMain} onClick={() => props.handleMenuClick(Menu.Projects)}>Projekty</Li>
                <Li color={primaryMain} onClick={() => props.handleMenuClick(Menu.Contact)}>Kontakt</Li>
            </Ul>
        </Nav>
    );
}
export default Header;