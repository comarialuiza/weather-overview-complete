import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

    #container {
        padding: 30px;
        background-color: #829BB4;
        height: 100vh;
        display: flex;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Raleway', sans-serif;
        -webkit-font-smoothing: antialiased;
        color: #333;
    }
`;