function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve conter 11 dígitos"}
    } else {
      return {valido:true, texto:""}
    }
  }
  function validarSenha(senha){
    if(senha.length <4 || senha.length > 20){
      return {valido:false, texto:"Senha deve ter entre 4 e 20 dígitos"}
    } else {
      return {valido:true, texto:""}
    }
  }
 

  export {validarCPF, validarSenha}
   