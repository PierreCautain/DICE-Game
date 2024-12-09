document.getElementById('rollDiceButton').addEventListener('click', function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Hide all dice faces for both players
    for (let i = 1; i <= 6; i++) {
        document.querySelector(`.img${i}.player1`).style.display = "none";
        document.querySelector(`.img${i}.player2`).style.display = "none";
    }

    // Show only the rolled number for each player
    document.querySelector(`.img${randomNumber1}.player1`).style.display = "block";
    document.querySelector(`.img${randomNumber2}.player2`).style.display = "block";

    if (randomNumber1 === randomNumber2) {
        document.querySelector("#rollDiceButton").textContent = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("#rollDiceButton").textContent = "Player 1 Wins!";
    } else {
        document.querySelector("#rollDiceButton").textContent = "Player 2 Wins!";
    }
});
