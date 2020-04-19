import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px;
    background-color: #fff;
    width: 300px;
    border-radius: 40px 0 0 40px;

    form {
        position: relative;

        input {
            width: 100%;
            height: 30px;
            padding: 15px;
            border-radius: 12px;
            border: 0;
            outline: 0;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }

        button {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: transparent;
            border: 0;
            outline: 0;
        }
    }
`;

export const Today = styled.div`
    img {
        margin: 20px 0;
    }

    .temperatureContainer {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 20px 0;

        .temperature {
            font-size: 50px;
            line-height: 40px;
            margin-right: 10px;
        }

        .temperatureCelsius {
            font-size: 18px;
        }
    }

    .cityName {
        margin: 20px 0;
        font-size: 12px;
        color: #ccc;
    }

    .weatherDescription {
        font-size: 12px;
        margin-top: 20px;
    }
`;