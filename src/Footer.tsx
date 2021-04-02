import styled from "styled-components";
import {Theme, useTheme} from "@material-ui/core";
import styles from "./styles/_variables.module.scss";

const FooterContainer = styled.footer<{ theme: Theme }>`
  position: sticky;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette.background.default};
  height: ${styles.footerHeight};
`;

const Footer = () => {
    const theme = useTheme();

    return <FooterContainer theme={theme}>
        <p style={{color: useTheme().palette.primary.main}}>© 2021 Lukasz Szpanelewski. All rights reserved.</p>
    </FooterContainer>
}

export default Footer;