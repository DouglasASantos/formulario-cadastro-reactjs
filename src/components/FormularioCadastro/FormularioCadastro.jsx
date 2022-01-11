import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';
import DadosEntregas from './DadosEntregas';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';

function FormularioCadastro({enviando}){
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if(etapaAtual === formularios.length-1){
      enviando(dadosColetados);
    }
  })

  const formularios = [
    <DadosUsuarios enviando={coletarDados}/>,
    <DadosPessoais enviando={coletarDados}/>,
    <DadosEntregas enviando={coletarDados}/>,
    <Typography variant="h5">Cadastro concluído com sucesso!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximaEtapa();
  }

  function proximaEtapa(){
    setEtapaAtual(etapaAtual+1)
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Criar Login</StepLabel></Step>
    <Step><StepLabel>Dados Pessoais</StepLabel></Step>
    <Step><StepLabel>Endereço</StepLabel></Step>
    <Step><StepLabel>Concluído</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}
 
export default FormularioCadastro;