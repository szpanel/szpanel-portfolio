import styled from "styled-components";
import {Box, Grid, Theme, Typography, useTheme} from "@material-ui/core";
import styles from "./styles/_main.module.scss";
import {Email, Facebook, GitHub} from "@material-ui/icons";

const FooterContainer = styled.footer<{ theme: Theme }>`
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${props => props.theme.palette.secondary.main};
  height: ${styles.footerHeight};
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  padding-left: 8px;
  font-weight: bold;
`;

const Footer = () => {
    const theme = useTheme();

    return <FooterContainer theme={theme}>
        <Grid container justify="space-between" alignItems="center">
            <Grid container xs={4} direction="column" spacing={2}>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <GitHub/><Link theme={theme} href="https://github.com/szpanel">@szpanel</Link>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <Facebook/><Link theme={theme} href="https://facebook.com/lukasz.szpanelewski">Łukasz
                        Szpanelewski</Link>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <Email/><Link theme={theme}
                                                      href="mailto:szpanelek@gmail.com">szpanelek@gmail.com</Link>
                    </Box>
                </Grid>
            </Grid>
            <Grid container xs={4} justify="center" alignItems="center">
                <Grid item><Typography color="primary">© 2021 Lukasz Szpanelewski. All rights
                    reserved.</Typography></Grid>
            </Grid>
            <Grid item xs={4}/>
        </Grid>
    </FooterContainer>
}

export default Footer;