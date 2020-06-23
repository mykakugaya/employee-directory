import React from "react";
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container"
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div>
      < Header>Employee Directory</ Header>
      <Container>
        < SearchResults />
      </Container>
    </div>
  ); 
} 

export default App;
