import styled from "styled-components";
import {Theme, useTheme} from "@material-ui/core";

const FooterContainer = styled.footer<{ theme: Theme }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette.background.default};
  height: 70px;
`;

const Footer = () => {
    const theme = useTheme();

    return <FooterContainer theme={theme}>
        <p style={{color: useTheme().palette.primary.main}}>© 2021 Lukasz Szpanelewski. All rights reserved.</p>
    </FooterContainer>
}

export default Footer;