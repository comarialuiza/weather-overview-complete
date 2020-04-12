import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    height: 100%;
    width: 300px;
    border-radius: 30px 0 0 30px;

    .weather-search {
        position: relative;
        input {
            width: 100%;
            padding: 8px 8px 8px 32px;
            border-radius: 30px;
            outline: 0;
            border: 1px solid #f7f7f7;
        }

        .weather-search-icon svg {
            position: absolute;
            top: 8px;
            left: 10px;
        }

        button {
            outline: 0;
            border: 0;
            position: absolute;
            right: 10px;
            top: 10px;

            svg {
                width: 12px;
                height: 12px;
            }
        }
    }
`;