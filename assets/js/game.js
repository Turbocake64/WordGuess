//Javascript

//globalvariables
var pokeArray = ["pikachu", "squirtle", "pidgey", "mew", "meowth"];
var pokeWord = randomPokemon(pokeArray);
var fillIns = [];
var BlankWordEle = document.getElementById("blank-word");
var winVal = 0;
var winEle = document.getElementById("winEle");
var loseVal = 0;
var loseEle = document.getElementById("loseEle");
var guessCountRemain = 10;
var guessCountRemainEle = document.getElementById("guessCountRemainEle");
var userGuess;
var alreadyGuessedEle = document.getElementById("alreadyGuessed");
var alreadyGuessed = [];
var correctAnswerCount = 0;
//This was meant to filter out duplicate buttons. It doesn't
var unique = alreadyGuessed.filter(onlyUnique);


function setup(word) {
    for (var i = 0; i < word.length; i++) {
        console.log(i)
        fillIns.push("_");
        if (userGuess === pokeWord[i]) {
            fillIns.splice(i, 1, userGuess)
            console.log(fillIns)
        }
        
        displayGuessCountRemain()
        if (userGuess === word[i]) {
            document.getElementById(i).textContent = userGuess
        }
    }
    var wordAsString = fillIns.join(" ");
    document.getElementById("blank-word").textContent = wordAsString;
}

function randomPokemon(array) {
    return array[Math.floor(Math.random() * Math.floor(array.length))]
}

function displayAlreadyGuessed() {
    alreadyGuessedEle.textContent = alreadyGuessed
}

function displayGuessCountRemain() {
    guessCountRemainEle.textContent = guessCountRemain;
}

function displayWinVal() {
    winEle.textContent = winVal;
};

function isGuessCorrect() {
    for (let i = 0; i < pokeWord.length; i++) {
        if (userGuess === pokeWord[i]) {
            
            // fillIns.push(userGuess)
        }
        
    }
}

function displayLoseVal() {
    loseEle.textContent = loseVal;
};

function reset() {

}

displayWinVal();
displayLoseVal();

//Function to force duplicates to be ignored. This doesn't work.
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

alert("Who's That Pokemon?");

setup(pokeWord);

document.onkeyup = function (event) {
    // Determines which key was pressed.
    userGuess = event.key;
    // Should filter out duplicates?
    alreadyGuessed.filter(onlyUnique)
    // Effectively pushes guessed letters!
    alreadyGuessed.push(event.key);
    console.log("All letters guessed so far " + alreadyGuessed + " ");
    console.log("User guessed " + userGuess + ".");
    alreadyGuessedEle.textContent = alreadyGuessed;
    //!!should filter out keys that aren't letters. Doesn't!!
    if (userGuess === "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || 
                      "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z") {
        if (pokeWord.includes(event.key)) {
            console.log("found it!");
            correctAnswerCount++;
                if (correctAnswerCount === pokeWord.length) {
                    winVal++
                    displayWinVal();
                    console.log("Wins: " + winVal);
                    alert("Way to go!");
                    alreadyGuessed = [];
                    displayAlreadyGuessed();
                }
        } else {
            console.log("Nope...")
            guessCountRemain = guessCountRemain -1
            displayGuessCountRemain()
            console.log("You have " + guessCountRemain + " bad Guesses left!")
        };

        if (guessCountRemain === 0) {
            alreadyGuessed = [];
            displayAlreadyGuessed();
            loseVal = loseVal + 1
            console.log("Awe, dang. You lose!")
            console.log("Losses: " + loseVal)
            alert("You're out of guesses!")
            alert("Let's try again!")
            displayLoseVal()
            guessCountRemain = 10
            displayGuessCountRemain()
            // alreadyGuessed.length = 0
        }
    };




    //   // Randomly chooses a choice from the options array. This is the Computer's guess.
    //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //   console.log(computerGuess + "  compguess");
    //   if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
    //     if (userGuess === computerGuess) {
    //       tieVal = tieVal + 1;
    //       tieEle.textContent = tieVal;
    //       console.log("tieval" + tieVal);
    //     } else if ((userGuess === "r" && computerGuess === "s") || (userGuess === "s" && computerGuess === "p") || (userGuess === "p" && computerGuess === "r")) {
    //       winVal = winVal + 1;
    //       winEle.textContent = winVal;
    //       console.log("winval" + winVal);
    //     } else {
    //       loseVal = loseVal + 1;
    //       loseEle.textContent = loseVal;
    //       console.log("loseval" + loseVal);
    //     }
    //   };
}
