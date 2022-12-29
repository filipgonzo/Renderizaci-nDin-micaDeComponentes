import React, { useState } from "react";
import { BaseColaboradores } from "./BaseInicial";
import Formulario from "./Component/Formulario";
import ListaColaboradores from "./Component/ListaColaboradores";
import Buscador from "./Component/buscador";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [valorDeLaCaja, setValorDeLaCaja] = useState('');
  
  return (
    <div className="App">
      <Container>
        <Buscador
          setValorDeLaCaja={setValorDeLaCaja}
        />
        <Row>
          <Col>
            <Formulario
              lstColaboradores={lstColaboradores}
              setLstColaboradores={setLstColaboradores}
            />

            <ListaColaboradores
              valorDeLaCaja={valorDeLaCaja}
              lstColaboradores={lstColaboradores}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
