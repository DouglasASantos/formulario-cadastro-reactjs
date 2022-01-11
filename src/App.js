import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core";
import ValidacoesCadastros from "./contexts/ValidacoesCadastros"
import { validarCPF, validarSenha } from "./models/cadastro";

class App extends Component {

  render(){
    return (
      <Container component ="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <ValidacoesCadastros.Provider 
          value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}>
          <FormularioCadastro enviando={enviarForm}/>
        </ValidacoesCadastros.Provider>
      </Container>
      
    );
  }
  
}

function enviarForm(dados){
  console.log(dados)
}

 

export default App;
