(function(){
    'use strict'
    console.log('reading JS');

    const game = document.querySelector('#game');

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', 
            '4die.png', '5die.png', '6die.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    //clicking sound for clicking buttons
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        document.querySelector('#clickSound').currentTime = 0.2;
        document.querySelector('#clickSound').play();
      });
    }

    //making music a lil quieter
    document.querySelector('#bgMusic').volume = 0.5; 


    document.querySelector('#start').addEventListener('click', function(){
        console.log('close');
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.modal').style.display = "none";
        document.querySelector('#start').innerHTML="Continue";
        setUpTurn();
        
    });

    document.querySelector('#quit').addEventListener('click', function(){
        console.log('quit');
        location.reload();
    });

    document.querySelector('#rules').addEventListener('click', function(){
        console.log('rules');
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.modal').style.display = "flex";
    });


    function setUpTurn() {
        game.innerHTML = `<p>${gameData.players[gameData.index]}'s turn!</p>`;
    }

    document.querySelector('#roll').addEventListener('click', function(){
        console.log('Roll the Dice!');
        throwDice();
    });

    document.querySelector('#pass').addEventListener('click',function(){
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        switchPlayer();
        setUpTurn();
    });

    function throwDice(){
        gameData.roll1 = Math.floor(Math.random()*6)+1; 
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        game.innerHTML =`<p>${gameData.players[gameData.index]}'s turn!</p>`;
        console.log(gameData.roll1);
        console.log(gameData.roll2);
        document.querySelector(".dice").innerHTML=
        `<img src="images/${gameData.dice[gameData.roll1-1]}" width="180" height="180">
        <img src="images/${gameData.dice[gameData.roll2-1]}" width="180" height="180">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1's are rolled...
        if (gameData.rollSum === 2){
            console.log('snake eyes!');
            game.innerHTML = '<p>Oh snap! Snake eyes!</p>';
            document.querySelectorAll(".actions button").forEach(function(btn){
                btn.style.visibility = "hidden";
            });
            gameData.score[gameData.index]=0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(function(){
                document.querySelectorAll(".actions button").forEach(function(btn){
                    btn.style.visibility = "visible";
                });
                setUpTurn();
            }, 2000);
            switchPlayer();
        }

        //if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice rolled a 1');
            document.querySelectorAll(".actions button").forEach(function(btn){
                btn.style.visibility = "hidden";
            });
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            console.log(gameData.players[gameData.index]);
            game.innerHTML = `<p>You rolled a 1. Switching to ${gameData.players[gameData.index]}</p>`;
            showCurrentScore();
            setTimeout(function(){
                document.querySelectorAll(".actions button").forEach(function(btn){
                    btn.style.visibility = "visible";
                });
                setUpTurn();
            }, 2000);
            switchPlayer();
        }

        //if neither die is a 1...
        else {
            console.log('neither die was a 1, game continues...')
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            checkWinningCondition();
        }
    };

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd){
            showCurrentScore();
            console.log (`${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`)
            document.querySelector('#winningtext').innerHTML= `${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`;
            document.querySelector('.winningmodal').style.display = "flex";
            document.querySelector('.overlay').style.display = "block";
            document.querySelector('#restart').addEventListener('click', function(){
                console.log('quit');
                location.reload();
            });
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        document.querySelector('.bear-points .points').innerHTML = `${gameData.score[0]}`;
        document.querySelector('.bunny-points .points').innerHTML = ` ${gameData.score[1]}`;
    }

    function switchPlayer(){
        if(gameData.players[gameData.index]=="Player 1"){
            console.log("images for player 1");
            document.querySelector(".bg-splash-bunny").className = "bg-splash-bear";
            game.style.color= "#723A15";
            document.querySelector('#pass').className="passbear";
            document.querySelector('#roll').className="rollbear";
            
        } else if (gameData.players[gameData.index]=="Player 2"){
            console.log("images for player 2");
            document.querySelector(".bg-splash-bear").className = "bg-splash-bunny";
            game.style.color= "#E77082";
            document.querySelector('#pass').className="passbunny";
            document.querySelector('#roll').className="rollbunny";
        }
    }

})();