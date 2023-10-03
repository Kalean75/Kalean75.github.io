var tokens = ["X", "O"];
var players = [];
var totals = [];
var scores = [0,0,0];
var winCombos = [7,56,73,84,146,273,292,448];
var turn = 0;
var gameOver;
var winAudio = new Audio('win-audio.mp3');
var loseAudio = new Audio('lose-audio.mp3');
while (true){
	
	players[0] = prompt("Enter First Player's Name: ");
	if (players[0] === "" || players[0] === null)
	{
		alert("Please enter a Valid name");
	}
	
	else break;
}
while (true){
	
	players[1] = prompt("Enter Second Player's Name: ");
	if (players[1] === "" || players[1] === null)
	{
		alert("Please enter a Valid name");
	}
	
	else break;
}

function startGame()
{
	document.getElementById("player1Score").innerText = players[0] + " Wins: " + scores[0];
	document.getElementById("player2Score").innerText = players[1] + " Wins: " + scores[1];
	document.getElementById("ties").innerText = "Ties: " + scores[2];
	document.getElementById("play-again").className = "hide";
	var counter = 1;
	var innerDivs = "";
	for (i = 1; i <=3; i++)
	{
		innerDivs += '<div id = "row-' + i + '">';
		
		for(j = 1; j <=3; j++)
		{
			innerDivs += '<div onclick = "play(this,' + counter + ');"></div>'
			counter *= 2;
		}
		
		innerDivs += '</div>';
	}
	
	document.getElementById("board").innerHTML = innerDivs;
	gameOver = false;
	totals = [0, 0];
	document.getElementById("game-message").innerText = "It's " + players[turn] + "'S Turn";
}

function play(clicked, playerValue)
{
	
	if(!gameOver)  
	{	
		clicked.innerText = tokens[turn];
			
		totals[turn] = totals[turn] + playerValue;
			
		if(winCondition())
		{
			scores[turn] ++;
			document.getElementById("game-message").innerText = " " + players[turn] + " Wins! Now bow to your master!!!";
			document.getElementById("play-again").className = "show";
			document.getElementById("player1Score").innerText = players[0] + " Wins: " + scores[0];
			document.getElementById("player2Score").innerText = players[1] + " Wins: " + scores[1];
			winAudio.play();
		}
		
		else if(gameOver)
		{
			scores[2] ++;
			document.getElementById("game-message").innerText = "It's a tie!";
			document.getElementById("play-again").className = "show";
			document.getElementById("ties").innerText = "Ties: " + scores[2];
			loseAudio.play();
		}
			
		else
		{
			if (turn)
			{
				turn = 0;
			}
				
			else
			{
				turn = 1;
			}	
				
			clicked.attributes["0"].nodeValue = "";
				
			document.getElementById("game-message").innerText = "It's " + players[turn] + "'S Turn";
		}
	}	
}

function winCondition()
{

	for(i = 0; i < winCombos.length; i++)
	{
		if ((totals[turn] & winCombos[i]) == winCombos[i])
		{
			gameOver = true;
			return true;
		}
	}
	
	if((totals[0] + totals[1]) == 511)
	{
		gameOver = true;
	}

	return false;
}