import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    font-family: 'arial'; 
}
body{
    width: 100vW;
    height: 100vW;
    dispay:flex;
    justify-content: center;
    background-color:  white;
}
`;
export default Global;