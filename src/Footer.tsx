import styled from "styled-components";
import {useTheme} from "@material-ui/core";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  height: 70px;
`;

const Footer = () => {
    return <FooterContainer>
        <p style={{color: useTheme().palette.primary.main}}>© 2021 Lukasz Szpanelewski. All rights reserved.</p>
    </FooterContainer>
}

export default Footer;