// TIC TAC TOE
const tic_tac_toe = {
  // ATTRIBUTES
  board: ['', '', 'P', '', '', '', 'C', '', ''],
  symbols: {
    options: ['P', 'C', 'B'],
    turn_index: 0,
    change: function (element) {
      this.turn_index = element
    },
  },
  wrong_indexs: [],
  tentativas: -1,
  container_element: null,

  // FUNCTIONS
  init: function (container) {
    this.container_element = container
  },

  is_full: function () {
    for (var i = 0; i < 9; i++) if (this.board[i] === '') return false

    return true
  },

  check_board: function () {
    var i, animal
    var returning = false

    // checking rows
    animal = this.board[0]
    if (this.board[1] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(1)
      returning = true
    } else if (this.board[2] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(2)
      returning = true
    }
    if (this.board[1] == this.board[2]) {
      this.wrong_indexs.push(1)
      this.wrong_indexs.push(2)
      returning = true
    }

    animal = this.board[3]
    if (this.board[4] == animal) {
      this.wrong_indexs.push(3)
      this.wrong_indexs.push(4)
      returning = true
    } else if (this.board[5] == animal) {
      this.wrong_indexs.push(3)
      this.wrong_indexs.push(5)
      returning = true
    }
    if (this.board[4] == this.board[5]) {
      this.wrong_indexs.push(4)
      this.wrong_indexs.push(5)
      returning = true
    }

    animal = this.board[6]
    if (this.board[7] == animal) {
      this.wrong_indexs.push(6)
      this.wrong_indexs.push(7)
      returning = true
    } else if (this.board[8] == animal) {
      this.wrong_indexs.push(6)
      this.wrong_indexs.push(8)
      returning = true
    }
    if (this.board[7] == this.board[8]) {
      this.wrong_indexs.push(7)
      this.wrong_indexs.push(8)
      returning = true
    }

    // checking columns
    animal = this.board[0]
    if (this.board[3] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(3)
      returning = true
    } else if (this.board[6] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(6)
      returning = true
    }
    if (this.board[3] == this.board[6]) {
      this.wrong_indexs.push(3)
      this.wrong_indexs.push(6)
      returning = true
    }

    animal = this.board[1]
    if (this.board[4] == animal) {
      this.wrong_indexs.push(1)
      this.wrong_indexs.push(4)
      returning = true
    } else if (this.board[7] == animal) {
      this.wrong_indexs.push(1)
      this.wrong_indexs.push(7)
      returning = true
    }
    if (this.board[4] == this.board[7]) {
      this.wrong_indexs.push(4)
      this.wrong_indexs.push(7)
      returning = true
    }

    animal = this.board[2]
    if (this.board[5] == animal) {
      this.wrong_indexs.push(2)
      this.wrong_indexs.push(5)
      returning = true
    } else if (this.board[8] == animal) {
      this.wrong_indexs.push(2)
      this.wrong_indexs.push(8)
      returning = true
    }
    if (this.board[5] == this.board[8]) {
      this.wrong_indexs.push(5)
      this.wrong_indexs.push(8)
      returning = true
    }

    return returning
  },

  check_row: function (animal, position) {
    while (position > 2) position -= 3

    for (var i = position; i < 9; i += 3) {
      if (this.board[i] === animal) {
        return false
      }
    }

    return true
  },

  check_column: function (animal, position) {
    while (position % 3 != 0) position -= 1

    var j = 0
    for (var i = position; j < 3; i++, j++)
      if (this.board[i] === animal) return false

    return true
  },

  make_play: function (position) {
    if (this.board[position] === '') {
      this.board[position] = this.symbols.options[this.symbols.turn_index]
      this.draw()

      if (this.is_full()) {
        if (this.check_board()) {
          this.color_board_red()
          return true
        } else {
          this.color_board_green()
        }
      } else return false

      return true
    } else {
      return false
    }
  },

  start: function () {
    this.board = ['', '', 'P', '', '', '', 'C', '', '']
    this.symbols.turn_index = 0
    this.playerTurn = true
    this.wrong_indexs = []
    this.tentativas++
    document.querySelector('h5').innerHTML = 'Tentativas: ' + this.tentativas
    this.draw()
    this.gameover = false
  },

  color_board_green: function () {
    let content = ''

    for (i in this.board) {
      if (this.board[i] === 'P') {
        content +=
          '<div style="border: 6px solid green;">' +
          '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] === 'B') {
        content +=
          '<div style="border: 6px solid green;">' +
          '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] == 'C') {
        content +=
          '<div style="border: 6px solid green;">' +
          '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
          '</div>'
      }
    }

    this.container_element.innerHTML = content
  },

  is_index: function (index) {
    for (var j = 0; j < this.wrong_indexs.length; j++)
      if (index == this.wrong_indexs[j]) return true

    return false
  },

  color_board_red: function () {
    let content = ''

    for (i in this.board) {
      if (this.board[i] === 'P') {
        if (this.is_index(i)) {
          content +=
            '<div style="border: 6px solid red;" >' +
            '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
            '</div>'
        } else {
          content +=
            '<div >' +
            '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
            '</div>'
        }
      } else if (this.board[i] === 'B') {
        if (this.is_index(i)) {
          content +=
            '<div style="border: 6px solid red;" >' +
            '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
            '</div>'
        } else {
          content +=
            '<div >' +
            '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
            '</div>'
        }
      } else if (this.board[i] == 'C') {
        if (this.is_index(i)) {
          content +=
            '<div style="border: 6px solid red;" >' +
            '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
            '</div>'
        } else {
          content +=
            '<div>' +
            '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
            '</div>'
        }
      }
    }

    this.container_element.innerHTML = content
  },

  draw: function () {
    let content = ''

    for (i in this.board) {
      if (this.board[i] === 'P') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] === 'B') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] == 'C') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else {
        content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + '</div>'
      }
    }

    this.container_element.innerHTML = content
  },
}
