var inputField = document.getElementById("yourNumber");
var numberOfGuesses = 1;
var resultMessage = document.querySelector("h2")
var funnyMessage = document.querySelector("h3")
var myNumber = Math.floor((Math.random() * 100) + 1);
console.log(myNumber)

inputField.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    event.preventDefault();
    var yourNumber = inputField.value;
    console.log(yourNumber);

    if (yourNumber > 100 || yourNumber < 0) {
      resultMessage.innerText = "Epic fail..Your number is not between 0 and 100"
    } else if (yourNumber < myNumber) {
      resultMessage.innerText = "Too low"
      console.log(myNumber)
      numberOfGuesses++
    } else if (yourNumber > myNumber) {
      resultMessage.innerText = "Too High"
      numberOfGuesses++
    } else {
      resultMessage.innerText = ` Finally you have guessed ${myNumber} !! gussed from : ${numberOfGuesses}`
      if (numberOfGuesses <= 3) {
        funnyMessage.innerText = `${numberOfGuesses} ? You should buy a lottery ticket!!`
      } else if (numberOfGuesses > 3 && numberOfGuesses <= 6) {
        funnyMessage.innerText = `${numberOfGuesses} ? Not bad...but not Mindreader, what can I say`
      } else if (numberOfGuesses > 10) {
        funnyMessage.innerText = `${numberOfGuesses} ? This game is not your strenght...`
      }
    }
  }
});
