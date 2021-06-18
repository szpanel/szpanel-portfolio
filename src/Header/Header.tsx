import styled from "styled-components";
import {
    AppBar,
    Avatar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Theme,
    Toolbar,
    Typography,
    useTheme
} from "@material-ui/core";
import React, {useContext, useState} from "react";
import {Brightness4, Brightness7, ChevronLeft, ChevronRight, MenuOpen} from "@material-ui/icons";
import styles from "../styles/_main.module.scss";
import {createStyles, makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import ChangeLanguageComponent from "./ChangeLanguageComponent";
import i18n from "../locales/i18n";
import {Contexts} from "../context/contexts";

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
    handleMenuClick: (menuOption: ValueOfMenu) => void,
}

export type ValueOfMenu = Menu[keyof Menu];

export interface Menu {
    About: string,
    Projects: string,
    Contact: string,
}

export const MenuItems: Menu = {
    About: i18n.t('header.aboutMe'),
    Projects: i18n.t('header.projects'),
    Contact: i18n.t('header.contact'),
}

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            color: theme.palette.primary.main,
            background: theme.palette.secondary.main,
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        },
        title: {
            flexGrow: 1,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
    }),
);

export const Header = (props: Props) => {
    const classes = useStyles();
    const theme = useTheme();

    const primaryMain = theme.palette.primary.main;

    const {prefersDarkMode} = useContext(Contexts.PrefersDarkModeContext);

    const setThemeIcon = () => {
        props.handleThemeChange();
    }

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isMobileView = useContext(Contexts.IsMobileViewContext);

    const handleDrawerOpen = () => setIsDrawerOpen(true);
    const handleDrawerClose = () => setIsDrawerOpen(false);

    const handleMobileMenuClick = (menuItem: ValueOfMenu) => {
        handleDrawerClose();
        props.handleMenuClick(menuItem);
    }

    return (isMobileView ? <>
                <AppBar
                    position="sticky"
                    className={clsx(classes.appBar, {[classes.appBarShift]: isDrawerOpen,})}>
                    <Toolbar color="secondary">
                        <Avatar variant="square" alt="Page icon"
                                src={theme.palette.type === "dark" ? "/favicon.ico" : "/favicon_blue.ico"}/>
                        <Typography variant="h6" noWrap className={classes.title}>
                            szpanel
                        </Typography>
                        <IconButton>
                            <ChangeLanguageComponent/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="change theme"
                            edge="end"
                            onClick={setThemeIcon}>
                            {prefersDarkMode ? <Brightness7/> : <Brightness4/>}
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(isDrawerOpen && classes.hide)}>
                            {!isDrawerOpen && <MenuOpen/>}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={isDrawerOpen}
                    classes={{paper: classes.drawerPaper,}}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeft/> : <ChevronRight/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        {Object.values(MenuItems).map(menu => (
                            <ListItem button key={menu}>
                                <ListItemText primary={menu.toUpperCase()} onClick={() => handleMobileMenuClick(menu)}/>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </> :
            <Nav theme={theme}>
                <Ul>
                    <IconButton
                        color="inherit"
                        aria-label="change theme"
                        edge="start">
                        <Avatar
                            variant="square"
                            src={prefersDarkMode ? "/favicon.ico" : "/favicon_blue.ico"}/>
                    </IconButton>
                    <Li color={primaryMain} bold onClick={() => props.handleMenuClick(MenuItems.About)}>SZPANEL</Li>
                </Ul>
                <Ul>
                    <Li>
                        <ChangeLanguageComponent/>
                    </Li>
                    <Li>
                        <IconButton
                            color="primary"
                            aria-label="change theme"
                            edge="start"
                            onClick={setThemeIcon}>
                            {prefersDarkMode ? <Brightness7/> : <Brightness4/>}
                        </IconButton>
                    </Li>
                    {Object.values(MenuItems).map((menu) =>
                        <Li key={menu} color={primaryMain}
                            onClick={() => props.handleMenuClick(menu)}>{menu}
                        </Li>
                    )}
                </Ul>
            </Nav>
    );
}
export default Header;
