import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #f2f2f2;
    color: #333; /* Esto ayudará a mejorar la visibilidad del texto */
}
`;

export default Global;
