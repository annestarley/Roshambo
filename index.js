
class UserGuess {
  constructor() {
    this.userGuess = process.argv[2]
  }
}

class Roshambo extends UserGuess {
  constructor() {
    super()
    const roshamboArray = ['rock', 'paper', 'scissors']
    this.computerGuess = roshamboArray[Math.floor(Math.random()*roshamboArray.length)]
  }

  static computerWins() {
    console.log(`~Computer wins.~`)
  }

  static userWins() {
    console.log(`~User wins.~`);
  }

  play() {
    console.log(`Playing a game of Rashambo agains the computer.`)
    console.log(`Player plays ${this.userGuess}!`)
    console.log(`Computer plays ${this.computerGuess}!`);
    if (this.userGuess == this.computerGuess) {
      console.log(`~It's a tie.~`);
      return this
    }
    switch(this.userGuess) {
      case 'rock':
        if (this.computerGuess === 'scissors') Roshambo.userWins()
        else Roshambo.computerWins()
        break;
      case 'paper':
        if (this.computerGuess === 'rock') Roshambo.userWins()
        else Roshambo.computerWins()
        break;
      case 'scissors':
        if (this.computerGuess === 'paper') Roshambo.userWins()
        else Roshambo.computerWins()
        break;
      default:
        console.log('Invalid entry: please choose rock, paper, or scissors.');
    }

  }
}

let game = new Roshambo()
game.play()
