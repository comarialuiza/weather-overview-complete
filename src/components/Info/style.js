import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px;
    width: calc(100% - 300px);
    background-color: #f6f6f8;
    border-radius: 0 40px 40px 0;

    h3 {
        margin-bottom: 20px;
        font-size: 22px;
        font-weight: 400;
    }

    ul {
        list-style: none;
    }
`;

export const WeekOverview = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 20px;
    margin-bottom: 50px;
`;

export const Day = styled.li`
    padding: 15px;
    text-align: center;
    background-color: #fff;
    border-radius: 12px;

    img {
        margin-bottom: 20px;
    }

    p {
        font-size: 12px;

        .dayMax {
            color: #333;
            display: block;
            margin-bottom: 5px;
        }

        .dayMin {
            color: #ccc;
            display: block;
        }
    }
`;

export const Highlights = styled.div``;

export const DayOverview = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
`;

export const DayDetail = styled.li`
    padding: 15px;
    background-color: #fff;
    border-radius: 12px;

    .dayTitle {
        font-size: 12px;
        color: #ccc;
    }

    .dayInfo {
        margin-top: 20px;

        .mainInfo {
            font-size: 34px;
            font-weight: 500;
            margin-right: 10px;
        }
    }
`;

export const Progress = styled.p`
    width: ${ props => props.width }%;
    background-color: #ec6d4c;
    height: 20px;
    margin: 20px 0;
`;