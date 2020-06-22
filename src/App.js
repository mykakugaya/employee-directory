import React from "react";
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container"
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Container>
      < Header>Employee Directory</ Header>
      < SearchResults />
    </Container>
  ); 
} 

export default App;
