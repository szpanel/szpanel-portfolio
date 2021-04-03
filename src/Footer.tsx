import styled from "styled-components";
import {Theme, useTheme} from "@material-ui/core";
import styles from "./styles/_main.module.scss";

const FooterContainer = styled.footer<{ theme: Theme }>`
  position: sticky;
  bottom: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette.secondary.main};
  height: ${styles.footerHeight};
`;

const Footer = () => {
    const theme = useTheme();

    return <FooterContainer theme={theme}>
        <p style={{color: useTheme().palette.primary.main}}>© 2021 Lukasz Szpanelewski. All rights reserved.</p>
    </FooterContainer>
}

export default Footer;