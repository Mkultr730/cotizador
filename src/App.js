import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  const [summary, setSummary] = useState({});

  const { result, data } = summary;

  return (
    <Container>
      <Header 
        titulo="Cotizador de Seguros" 
      />
      <FormContainer>
        <Form 
          setSummary={setSummary}
        />
        { data ? 
          (
            <Fragment>
              <Summary data={data}/>
              <Result result={result}/>
            </Fragment>
          )
          : <p>Choose brand, year and plan.</p>
        }
      </FormContainer>
    </Container>

  );
}

export default App;
