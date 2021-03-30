import {Box, Button, InputAdornment, TextField} from "@material-ui/core";
import {Email, Face} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 600px;
`;

const Contact = () => {
    return (
        <Container>
            <Box m={1} width={1}>
                <TextField id="standard-basic"
                           label="Przedstaw się"
                           variant="filled"
                           fullWidth
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <Face/>
                                   </InputAdornment>
                               ),
                           }}/>
            </Box>
            <Box m={1} width={1}>
                <TextField id="standard-basic"
                           label="Email kontaktowy"
                           variant="filled"
                           fullWidth
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <Email/>
                                   </InputAdornment>
                               ),
                           }}
                />
            </Box>
            <Box m={1} width={1}>
                <TextField id="standard-basic" label="Treść"
                           variant="filled"
                           multiline
                           fullWidth
                           rows={5}
                />
            </Box>
            <div/>
            <Box m={1}>
                <Button variant="outlined" color="primary" size="large">
                    Wyślij
                </Button>
            </Box>
        </Container>
    )
};

export default Contact;