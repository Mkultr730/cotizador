import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
    background-color: #26c6da;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: white;
`;

const Result = ({result}) => {
    return ( 
        <Message>Total: ${result}</Message>
     );
}
 
export default Result;