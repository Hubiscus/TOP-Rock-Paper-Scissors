console.log("Hello World!");
// userchoice()
// choice =console.prompt("Pick between Rock , paper, or scissors")
// playerChoice= choice.toLowerCase
// if it equals any proper choice return playerChoice then 
// else if its a string that doesnt match recall userchoice() after telling them its not a valid answer and try again
// else in case they typed nothing (null or "") say cancelled and return the string "nothing selectedas"

// cpu choice funciton
// THe computer picks a random number 1-3 
// each number corresponds to a choice
// if randomNumber  is equal to 1
//      then computerChoice == "Rock"
//  else if random number is  equal to 2
//      then computerChoice == "Paper"
//  else if none of those choices (if working correctly the only other number choice should be 3)
//      then computerChoice== "Scisssors"
// retutn computerChoice
/// new function that plays single round
// define singleRound take parameters player input,computerSelection= function()
// take player input and change to lower and input into a new string to ger around case sens
// if player selection is rock and cpu is scissors then the player wins 
//  else if player select is rock and cpu is paper player loses
//  else if player is paper and cpu is rock player wins
//  else if player is paper and cpu is scissors player loses 
//  else if player is scissors and cpu is paper player wins
// else if player is  scissors and  cpu is rock player loses 
// else (should account for all situation in which the cpu and player pick the same thing) draw
// game()new functuon that plays rounds takes no params
// make counter var to counnt rounds 
// for i = 0 ; i<5; i +++:
//      playround()
let choice = prompt("Pick between Rock , paper, or scissors");
function userChoice(choice){
    let playerChoice = choice.toLowerCase;
    playerChoice == "rock" || "paper" || "scissors" ? 
    playerChoice: 
    playerChoice== "" ? console.log("Game cancelled no choice selected") 
    : console.log("Invalid answer try again");userChoice()
}
userChoice();