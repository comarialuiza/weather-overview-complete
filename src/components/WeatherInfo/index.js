import React, { useState } from 'react';

import { Container } from './styles';

export default function WeatherInfo() {
    return (
        <Container>
            <p className="weather-info-temperature">12 °C</p>
            <p className="weather-info-city"><span>Monday,</span> 16:00</p>
            <p className="weather-info-description">Mostly Cloudy</p>
            <p className="weather-info-precipition">Rain - 30%</p>
        </Container>
    );
}