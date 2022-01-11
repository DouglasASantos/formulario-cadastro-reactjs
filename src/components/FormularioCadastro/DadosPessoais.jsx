import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel }from '@material-ui/core';
import ValidacoesCadastros from '../../contexts/ValidacoesCadastros';
import useErros from "../../hooks/useErros";

function DadosPessoais({enviando}){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastros);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return(
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          enviando({nome, sobrenome, cpf, promocoes, novidades});
        }
      }}
    >
      
      <TextField 
       value={nome}
       onChange={(event) => {
        setNome(event.target.value);
      }}
      onBlur={validarCampos}
      error={!erros.nome.valido}
      helperText={erros.nome.texto}
      id="Nome" 
      name="nome"
      label="Nome" 
      margin="normal" 
      fullWidth
      />

      <TextField 
       value={sobrenome}
       onChange={(event) => {
        setSobrenome(event.target.value);  
      }}
      id="Sobrenome" 
      name="sobrenome"
      label="Sobrenome" 
      margin="normal" 
      fullWidth
      />

      <TextField 
       value={cpf}
       onChange={(event) => {
        setCpf(event.target.value);  
      }}

      onBlur={validarCampos}
      error={!erros.cpf.valido}
      helperText={erros.cpf.texto}
      id="CPF" 
      name="cpf" 
      type="number"
      label="CPF" 
      margin="normal" 
      fullWidth
      />

      <FormControlLabel  
        label="Promoções" 
        control={
          <Switch 
          checked={promocoes}
            onChange={(event) => {
            setPromocoes(event.target.checked)
          }} 
            name="Promoções" 
            color="primary"
          />
        }
      />

      <FormControlLabel  
        label="Novidades" 
        control={
          <Switch 
            checked={novidades}
            onChange={(event) => {
            setNovidades(event.target.checked)
          }} 
            name="Novidades"  
            color="primary"
          />
        }
      />

      <Button type="submit" 
        variant="contained" 
        color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
















// Douglas Andrade dos Santos
// Rua, Jacatirão, número 278 casa 1
// CEP: 88119-414
// São José,SC 
// (48) 9 9120-0887
// douglas.andrade.dossantos1985@gmail.com
// https://www.linkedin.com/in/douglas-andrade-dos-santos-8a958020b/


// Conhecimentos  técnicos:
// conhecimento básico em JavaScript.
// conhecimento básico em React.
// conhecimento básico em Typescript.
// conhecimento básico em HTML.
// conhecimento básico em CSS.
// conhecimento básico em Git.
// conhecimento básico em Bootstrapt.

// Formação
// Escolaridade :
// Cursando Ensino Superior  - Análise e desenvolvimento de sistemas.
//  Estácio - São José, SC  - Abril de 2021 a Data Atual .

// Portifólio: 
// https://github.com/DouglasASantos
