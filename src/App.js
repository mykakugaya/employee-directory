import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container"
import Header from "./components/Header";
import Searchbar from "./components/Employee";
import Main from "./components/Main";

function App() {
  return (
    <Container>
      < Header>Employee Directory</ Header>
      < Main />
    </Container>
  ); 
} 



export default App;
