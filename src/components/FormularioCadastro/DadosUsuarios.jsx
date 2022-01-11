import React, { useState, useContext } from 'react';
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastros from "../../contexts/ValidacoesCadastros";
import useErros from "../../hooks/useErros";

function DadosUsuarios({enviando}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastros);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form 
          onSubmit={(event)=> {
           event.preventDefault();
           if(possoEnviar()){
            enviando({email,senha});
           }
          
          }}
        >
            <TextField
              value={email} 
              onChange={(event)=> { setEmail(event.target.value)}}
              id="email" 
              name="email"
              label="email" 
              type="email" 
              required
              margin="normal" 
              fullWidth
            />
            <TextField 
              value={senha} 
              onChange={(event)=> { 
                setSenha(event.target.value)
              }}
              onBlur={validarCampos}
              error={!erros.senha.valido}
              helperText={erros.senha.texto}
              id="senha"
              name="senha" 
              label="senha" 
              type="password" 
              required
              margin="normal" 
              fullWidth
            />
            <Button type="submit" 
              variant="contained" 
              color="primary">Próximo
            </Button>
        </form>
    )
}

export default DadosUsuarios;