import styled from "styled-components";
import {Box, Theme, Typography, useTheme} from "@material-ui/core";
import styles from "./styles/_main.module.scss";
import {Email, Facebook, GitHub} from "@material-ui/icons";
import {createStyles, makeStyles} from "@material-ui/styles";

const FooterContainer = styled.footer<{ theme: Theme }>`
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${props => props.theme.palette.secondary.main};
  height: ${styles.footerHeight};
`;

const useStyles = makeStyles(() =>
    createStyles({
        cursorPointer: {
            cursor: "pointer"
        }
    }),
);

const Footer = () => {
    const theme = useTheme();
    const classes = useStyles();

    return <FooterContainer theme={theme}>
        <Box display="flex" gridGap={16}>
            <GitHub className={classes.cursorPointer}
                    onClick={() => window.location.href = "https://github.com/szpanel"}/>
            <Facebook className={classes.cursorPointer}
                      onClick={() => window.location.href = "https://facebook.com/lukasz.szpanelewski"}/>
            <Email className={classes.cursorPointer}
                   onClick={() => window.location.href = "mailto:szpanelek@gmail.com"}/>
        </Box>
        <Box>
            <Typography color="primary" align="center" variant="h6">© 2021 Lukasz Szpanelewski. All rights
                reserved.</Typography>
        </Box>
    </FooterContainer>
}

export default Footer;
