import React from 'react';
import { FiSun } from 'react-icons/fi';

import { Container } from './styles';

export default function WeekOverview() {
    return (
        <Container>
            <div className="day-unit">
                <p className="day-unit-name">Sun</p>
                <FiSun />
                <p className="day-unit-temperature">15 °C</p>
            </div>

            <div className="day-unit">
                <p className="day-unit-name">Sun</p>
                <FiSun />
                <p className="day-unit-temperature">15 °C</p>
            </div>

            <div className="day-unit">
                <p className="day-unit-name">Sun</p>
                <FiSun />
                <p className="day-unit-temperature">15 °C</p>
            </div>

            <div className="day-unit">
                <p className="day-unit-name">Sun</p>
                <FiSun />
                <p className="day-unit-temperature">15 °C</p>
            </div>

            <div className="day-unit">
                <p className="day-unit-name">Sun</p>
                <FiSun />
                <p className="day-unit-temperature">15 °C</p>
            </div>

            <div className="day-unit">
                <p className="day-unit-name">Sun</p>
                <FiSun />
                <p className="day-unit-temperature">15 °C</p>
            </div>

            <div className="day-unit">
                <p className="day-unit-name">Sun</p>
                <FiSun />
                <p className="day-unit-temperature">15 °C</p>
            </div>
        </Container>
    );
}