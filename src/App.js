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

  return (
    <Container>
      <Buscador/>
      <Row>
        <Col>
          <div className="App">
            

            <Formulario
              lstColaboradores={lstColaboradores}
              setLstColaboradores={setLstColaboradores}
            />

            <ListaColaboradores
              lstColaboradores={lstColaboradores}
              setLstColaboradores={setLstColaboradores}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
