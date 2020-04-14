import React from 'react';

import { Container } from './styles';
import WeekOverview from '../WeekOverview';
import TodaysHighlights from '../TodaysHighlights';

export default function MainOverview() {
    return (
        <Container>
            <WeekOverview />
            <TodaysHighlights />
        </Container>
    );
}