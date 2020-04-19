import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';

import { Container } from './style';

export default function Error() {
    return (
        <Container>
            <FiAlertOctagon />
            Error! No place with that name! Please try again!
        </Container>
    );
}