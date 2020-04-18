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
        background-color: #007E7E;
        height: 100vh;
        font-family: Roboto, sans-serif;
    }

    #root {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        height: 100%;
    }
    
`;