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
  container_element: null,

  // FUNCTIONS
  init: function (container) {
    this.container_element = container
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
      if (
        this.check_row(
          this.symbols.options[this.symbols.turn_index],
          position,
        ) &&
        this.check_column(
          this.symbols.options[this.symbols.turn_index],
          position,
        )
      ) {
        this.board[position] = this.symbols.options[this.symbols.turn_index]
        this.draw()
        return true
      } else return false
    } else {
      return false
    }
  },

  start: function () {
    this.board = ['', '', 'P', '', '', '', 'C', '', '']
    this.symbols.turn_index = 0
    this.playerTurn = true
    this.draw()
    this.gameover = false
  },

  draw: function () {
    let content = ''

    for (i in this.board) {
      content +=
        '<div onclick="tic_tac_toe.make_play(' +
        i +
        ')">' +
        this.board[i] +
        '</div>'
    }

    this.container_element.innerHTML = content
  },
}
