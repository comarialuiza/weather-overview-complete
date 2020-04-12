import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px 0;

    .weather-info-temperature {
        font-size: 45px;
        margin: 20px 0;
    }

    .weather-info-city {
        margin: 20px 0 40px;

        span {
            font-weight: bold;
        }
    }

    .weather-info-description, .weather-info-precipition {
        margin: 20px 0;
    }
`;