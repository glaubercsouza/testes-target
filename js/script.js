function ex001(){
  let indice = 13;
  let soma = 0;
  let k = 0;
  let res01 = document.getElementById('ex001');
  
  while(k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  res01.classList.remove('inativo');
  res01.innerHTML = `<p><strong>Resposta</strong>: O resultado é <strong>${soma}</strong>.</p>`
}

function ex002() {
  let n1 = Number(window.prompt(`Digite um número:`));
  let fibonacci = [];
  let achou = 0;
  let res02 = document.getElementById('ex002');
  fibonacci[0] = 0;
  fibonacci[1] = 1;
for (let i = 2; i < 18; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  if (n1 == fibonacci[i]) {
    achou = 1;
  } 
}
let frase;
if (achou == 0) {
  frase = "não pertence à sequência!";
} else {
  frase = "pertence à sequência!";
}
res02.classList.remove('inativo');
res02.innerHTML = `<p><strong>Resposta</strong>: A sequência de Fibonacci é ${fibonacci } </p> <p>O número ${n1} ${frase} </p>`
}

function ex003() {
  let res03 = document.getElementsByClassName('ex003');
  for (let i = 0; i < res03.length; i++) {
    res03[i].classList.remove('inativo');
    
  }
}

function ex004() {
  let res04 = document.getElementById('ex004');
  res04.classList.remove('inativo');
}

function ex005() {
  let str = String(window.prompt(`Digite uma palavra: `));
  let novaString = "";
  let res05 = document.getElementById('ex005');
  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }
  res05.classList.remove('inativo');
  res05.innerHTML = `<p><strong>Resposta</strong>: ${novaString}</p>`;
}