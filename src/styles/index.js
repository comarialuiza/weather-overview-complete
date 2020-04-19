import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 40px;
        background-color: #d6d7da;
        font-family: Roboto, sans-serif;
    }

    body, html, #root {
        height: 100%;
    }

    .container {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        height: 100%;
        max-width: 1140px;
        margin: 0 auto;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        border-radius: 40px;
    }
`;