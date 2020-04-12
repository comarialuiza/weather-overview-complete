import React from 'react';

import { Container } from './styles';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import WeatherInfo from '../WeatherInfo';

export default function Menu() {
    return (
        <Container>
            <form className="weather-search">
                <span className="weather-search-icon"><FiSearch /></span>
                <input type="text" placeholder="Search for places..." />
                <button type="button"><FiArrowRight /></button>
            </form>

            <WeatherInfo />
        </Container>
    );
}