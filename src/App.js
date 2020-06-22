import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Searchbar from "./components/Search";
import Main from "./components/Main";

function App() {
  return (
    <Wrapper>
      < Header />
      < Searchbar />
      < Main />
    </Wrapper>
  ); 
} 



export default App;
