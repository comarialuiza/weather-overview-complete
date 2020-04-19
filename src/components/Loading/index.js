import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './style';

export default function Loading() {
    return (
        <Container>
            <Loader type="ThreeDots" color="#d6d7da" height={50} width={50} />
        </Container>
    );
}