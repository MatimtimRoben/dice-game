// Player name
var player1 = "1st Player";
var player2 = "2nd Player";

// Function to roll the dice
function rollTheDice() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".p1").setAttribute("src",
            "d" + randomNumber1 + ".jpg");

        document.querySelector(".p2").setAttribute("src",
            "d" + randomNumber2 + ".jpg");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "OMG! Draw!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
        }
}