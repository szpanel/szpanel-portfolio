import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  float: left;
  padding: 10px;
  cursor: pointer;
`;

export const Header = () => {
    return (
        <Ul>
            <Li>O mnie</Li>
            <Li>Projekty</Li>
            <Li>Kontakt</Li>
        </Ul>
    );
}

export default Header;