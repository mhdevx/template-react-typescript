import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.scss';
import Router from './containers/Router';

const App: React.FC = () => (
  <>
    <Container>
      <Nav>
        <Link to="/">Main</Link>
      </Nav>
      <Nav>
        <Link to="/services">Services</Link>
      </Nav>
      <Nav>
        <Link to="/about">About</Link>
      </Nav>
    </Container>
    <Router />
  </>
);

export default App;
