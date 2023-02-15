const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const btn = document.getElementById('btn');

let formValido = false;

function validaCampo(a, b) {
  if (a >= b) return false
  return true
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const mensagemSucesso = `sucesso o <b>campo B (${campoB.value})</b> maior do que o <b>campo A(${campoA.value})</b>`;

  formValido = validaCampo(campoA.value, campoB.value);

  if (formValido) {
    const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';
  } 

  
})

campoA.addEventListener('keyup', function(e) {

  const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
  containerMensagemSucesso.style.display = 'none';

  formValido = validaCampo(e.target.value, campoB.value);

  const mensagemError = `o <b>campo A(${campoA.value})</b> precisa ser menor do que <b>campo B(${campoB.value})</b>`;

  if (!formValido) {
    const containerMensagemSucesso = document.querySelector('.mensagem-error');
    containerMensagemSucesso.innerHTML = mensagemError;
    containerMensagemSucesso.style.display = 'block';
    btn.style.background = '#969696';
    btn.disabled = true;
  } else {
    const containerMensagemSucesso = document.querySelector('.mensagem-error');
    containerMensagemSucesso.innerHTML = mensagemError;
    containerMensagemSucesso.style.display = 'none';
    btn.style.background = '';
    btn.disabled = false;
  }
})

campoB.addEventListener('keyup', function(e) {

  const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
  containerMensagemSucesso.style.display = 'none';

  formValido = validaCampo(campoA.value, e.target.value);

  const mensagemError = `o <b>campo A(${campoA.value})</b> precisa ser menor do que <b>campo B(${campoB.value})</b>`;

  if (!formValido) {
    const containerMensagemSucesso = document.querySelector('.mensagem-error');
    containerMensagemSucesso.innerHTML = mensagemError;
    containerMensagemSucesso.style.display = 'block';
    btn.style.background = '#969696';
    btn.disabled = true;
  } else {
    const containerMensagemSucesso = document.querySelector('.mensagem-error');
    containerMensagemSucesso.innerHTML = mensagemError;
    containerMensagemSucesso.style.display = 'none';
    btn.style.background = '';
    btn.disabled = false;
  }
})

