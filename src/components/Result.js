import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
    background-color: #26c6da;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: white;
`;

const Result = ({result}) => {
    return ( 
        <TransitionGroup
            component="p"
            className="resultado"
        >
            <CSSTransition
                classNames="resultado"
                key={result}
                timeout={{ enter: 500, exit: 500 }}
            >
                <Message>Total: ${result}</Message>
            </CSSTransition>
        </TransitionGroup>
     );
}
 
export default Result;