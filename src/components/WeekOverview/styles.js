import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 20px;
    margin-bottom: 50px;

    .day-unit {
        padding: 18px;
        background-color: #fff;
        border-radius: 12px;
        text-align: center;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .day-unit-name {
            text-transform: uppercase;
            font-size: 12px;
            margin-bottom: 20px;
        }

        svg {
            height: 25px;
            width: 25px;
            margin-bottom: 20px;
        }

        .day-unit-temperature {
            font-size: 12px;
        }
    }
`;