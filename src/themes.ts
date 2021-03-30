import {createMuiTheme} from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import {yellow} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: createPalette({
        type: 'dark',
        primary: {
            main: yellow[500],
        },
    }),
});