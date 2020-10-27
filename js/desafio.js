var Titulos = ['Desafio da pá suja', 'Torre colorida de Matilda']
var Descricoes = [
  'Com quatro palitos e um pedaço de papel faça igual ao modelo mostrado. Tire a sujeira da pá, movendo apenas dois palitos.',
  'Matilda tem 4 quadrados marrons, 3 quadrados roxos, 2 quadrados laranjas e 1 quadrado verde. Ela quer construir uma torre, de acordo com a figura, que respeite a seguinte regra: "Dois quadrados da mesma cor não podem se tocar"',
]
var Tamanho = Titulos.length - 1

function AntesProximo(elem, type) {
  var indice = parseInt(elem.name)

  if (type == 1) {
    if (indice >= Tamanho) return
    indice++
  } else {
    if (indice == 0) return
    indice--
  }
  console.log(indice)
  console.log(Tamanho)
  document.getElementById('Anterior').setAttribute('name', indice)
  document.getElementById('Proximo').setAttribute('name', indice)
  // Troca de Titulo
  var texto = document.createTextNode(Titulos[indice])
  $('#TituloDesafio').empty()
  document.getElementById('TituloDesafio').append(texto)

  // Troca de texto
  var texto = document.createTextNode(Descricoes[indice])
  $('#TextoDesafio').empty()
  document.getElementById('TextoDesafio').append(texto)

  //Troca de imagem
  var img = new Image()
  img.src = './assets/img/Desafios/' + indice + '.png'

  img.onerror = function () {}

  img.onload = function () {
    document.getElementById('ImagemDesafio').setAttribute('src', img.src)
  }
  ChecaSetas(indice)
}

// Checa se as setas estão aparecendo e desaparecendo nos finais
function ChecaSetas(indice) {
  if (indice == Tamanho) {
    document
      .getElementById('Proximo')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: none',
      )
    document
      .getElementById('Anterior')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
  } else if (indice == 0) {
    document
      .getElementById('Anterior')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: none',
      )
    document
      .getElementById('Proximo')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
  } else {
    document
      .getElementById('Proximo')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
    document
      .getElementById('Anterior')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
  }
}
