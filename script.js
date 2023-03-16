const resposta1Box = document.querySelector('.resposta1')
const INDICE = 13
let SOMA = 0
let K = 0

while(K < INDICE) {
  K++
  SOMA += K
}

resposta1Box.innerText = SOMA

function fibonacci(num) {
  let arrayFibonacci = [0,1]
  let tamanhoArray
  let valorAtual = 0
  let numeroEscolhido = parseInt(num)
  while (valorAtual <= numeroEscolhido) {
    tamanhoArray = arrayFibonacci.length
    valorAtual = arrayFibonacci[tamanhoArray - 1] + arrayFibonacci[tamanhoArray - 2]
    arrayFibonacci.push(valorAtual)
  }
  if (arrayFibonacci.includes(numeroEscolhido)) {
    return 'O número escolhido está na sequencia!'
  } else {
    return 'O número escolhido NÃO está na sequencia!'
  }
}

const numeroTestado = document.querySelector('#numero')
const buttonTeste = document.querySelector('#teste')
const resposta2Box = document.querySelector('.resposta2')

buttonTeste.addEventListener('click', () => {
  resposta2Box.innerText = fibonacci(numeroTestado.value)
  if(resposta2Box.innerText.includes('NÃO')) {
    resposta2Box.classList.add('negativo')
  } else {
    resposta2Box.classList.remove('negativo')
  }
})

function inverteString(str) {
  console.log(str)
  let arrayString = str.split('')
  let arrayNovo = []
  for(let i = 0; i < arrayString.length; i++) {
    arrayNovo.unshift(arrayString[i])
  }
  let stringInvertida = arrayNovo.join('')
  return stringInvertida
}

const stringNormal = document.querySelector('#string')
const buttonInverte = document.querySelector('#teste2')
const resposta5Box = document.querySelector('.resposta5')

buttonInverte.addEventListener('click', () => {
  resposta5Box.innerText = 'Palavra invertida:' + ' ' + inverteString(stringNormal.value)
})