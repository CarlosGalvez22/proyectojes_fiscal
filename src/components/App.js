import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateFiscalia from "./create-fiscalia.component";
import EditFiscalia from "./edit-fiscalia.component";
import FiscaliaList from "./fiscalia-list.component";

function App() {
  return (<Router>


    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>


        


            <Navbar.Brand>
              <Link to={"/edit-fiscalia"} className="nav-link">
                Fiscalias MP
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-fiscalia"} className="nav-link">
                  Create Fiscalia
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-fiscalia/:id"} className="nav-link">
                  Edit Fiscalia
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/fiscalia-list"} className="nav-link">
                  Fiscalia List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateFiscalia} />
                <Route path="/create-fiscalia" component={CreateFiscalia} />
                <Route path="/edit-fiscalia/:id" component={EditFiscalia} />
                <Route path="/fiscalia-list" component={FiscaliaList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
