$(document).ready(function() {
  $('#tell').mask('(00) 00000-0000');

  $('#cpf').mask('000.000.000-00');

  $('#cep').mask('00000-000');

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true,
      },
      tell: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: true
      }
    },
    messages: {
      nome: '<p style="color: red;">O campo Nome Completo é obrigatório</p>',
      email: '<p style="color: red;">O campo E-mail é obrigatório</p>',
      tell: '<p style="color: red;">O campo Telefone é obrigatório</p>',
      cpf: '<p style="color: red;">O campo CPF é obrigatório</p>',
      endereco: '<p style="color: red;">O campo Endereço é obrigatório</p>',
      cep: '<p style="color: red;">O campo CEP é obrigatório</p>',
    }
  })
})