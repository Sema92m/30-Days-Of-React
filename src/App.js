import React from "react";
// import Header from "./components/header/Header";
import styled from "styled-components";
import validator from 'validator';
const Title = styled.h1`
    font-size: 50px;
    font-weight: 300;
`;
const Header = styled.header`
    background-color: #61dbfb;
    padding: 25;
    padding: 10px;
    margin: 0;
`;
const Input =()=> 
  ( <div>
    <label htmlFor=""></label>
      <input type="email" />
  </div>)

class App extends React.Component {
  
    render() {
        return (
            <div className="App">
                <Header>
                    <div>
                        <Title>30 Days Of React</Title>
                        <h2>Getting Started React</h2>
                        <h3>JavaScript Library</h3>
                        <p>Instructor: Asabeneh Yetayeh</p>
                        <small>Oct 15, 2020</small>
                    <Input/>
                    </div>
                </Header>
            </div>
        );
    }
}

export default App;
