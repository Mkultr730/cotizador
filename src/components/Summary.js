import React from 'react';
import styled from '@emotion/styled';

import { capitalize } from '../helpers';

const Container = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Summary = ({data}) => {

    const { brand, year, plan } = data;

    return ( 
        <Container>
            <h2>Summary</h2>
            <ul>
                <li>Brand: {capitalize(brand)}</li>
                <li>Year: {year}</li>
                <li>Plan: {capitalize(plan)}</li>
            </ul>
        </Container>
     );
}
 
export default Summary;