function MudaDesafio(elem) {
  var desafio = document.getElementById('desafio')

  if (desafio) {
    var value = desafio.getAttribute('value')

    if (!value) {
    }
    console.log(value)
  }

  var img = new Image()
  img.src = './assets/img/Capa.jpg'

  img.onerror = function () {
    console.log('Error bro')
  }

  img.onload = function () {
    document.body.appendChild(img)
    console.log('All right')
  }
}
