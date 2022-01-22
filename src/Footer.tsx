import {Box, Typography, useTheme} from "@material-ui/core";
import {Email, Facebook, GitHub} from "@material-ui/icons";
import {createStyles, makeStyles} from "@material-ui/styles";
import {useContext} from "react";
import {Contexts} from "./context/contexts";
import packageJson from "../package.json";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(() =>
    createStyles({
        cursorPointer: {
            cursor: "pointer"
        }
    }),
);

const Footer = () => {
    const theme = useTheme();
    const isMobileView = useContext(Contexts.IsMobileViewContext);
    const classes = useStyles();
    const {t} = useTranslation();

    const openUrlInNewTab = (url: string) => window.open(url, '_blank', 'noopener, noreferrer')

    return <Box width={1}
                display='flex'
                gridGap={16}
                flexDirection={isMobileView ? 'column' : ''}
                alignItems='center'
                justifyContent='space-between'
                padding={2}
                bgcolor={theme.palette.secondary.main}>
        <Box display="flex" gridGap={16}>
            <GitHub className={classes.cursorPointer}
                    fontSize='large'
                    onClick={() => openUrlInNewTab("https://github.com/szpanel")}/>
            <Facebook className={classes.cursorPointer}
                      fontSize='large'
                      onClick={() => openUrlInNewTab("https://facebook.com/lukasz.szpanelewski")}/>
            <Email className={classes.cursorPointer}
                   fontSize='large'
                   onClick={() => openUrlInNewTab("mailto:szpanelek@gmail.com")}/>
        </Box>
        <Box>
            <Typography color='primary' align='center' variant='subtitle1'>
                {`${t('footer.version')}: ${packageJson.version}`}
            </Typography>
        </Box>
        <Box>
            <Typography color="primary" align="center" variant='subtitle2'>
                © 2021 Łukasz Szpanelewski.
            </Typography>
            <Typography color="primary" align="center" variant="subtitle2">
                {t('footer.allRightsReserved')}.
            </Typography>
        </Box>
    </Box>
}

export default Footer;
