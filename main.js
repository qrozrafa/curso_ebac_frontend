$(document).ready(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();

    const tarefaAdd = $('#input-tarefa').val();
    const novaTarefa = $('<li class="lista listaAdd"></li>');

    $(`<p> ${tarefaAdd}</p>`).appendTo(novaTarefa);

    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
    $('#input-tarefa').val('')
    $('li').click(function(e) {
      $(this).addClass('item-completado');
    });
  })


})

$('#check').on('click', function(e) {
  e.preventDefault();

  $('.lista').addClass('item-completado');
})

$('#limpar-todos').on('click', function(e) {
  e.preventDefault();

  $('.lista').remove();
})



