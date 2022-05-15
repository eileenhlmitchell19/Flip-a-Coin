var choices = ["Heads", "Tails"];
var generateBtn = document.querySelector("#generate");

function playGame(){
var computerChoice = choices[Math.floor (Math.random() * choices.length)]
// var notcomputerChoice = "Tails";


if(choices === computerChoice){

    alert("you have a really weird coin")

} else if ((computerChoice === "Heads" && choices === "Tails") || ( computerChoice ==="Tails" && choices === "Heads"))
{
alert ("")
}
};

// // Write password to the #password input
// function writePassword() {
//     var coin = generateCointoss();
//     // var passwordText = document.querySelector("#coin");
  
//     // passwordText.value = coin;
  
//   }


// Add event listener to generate button
generateBtn.addEventListener("click", playGame);