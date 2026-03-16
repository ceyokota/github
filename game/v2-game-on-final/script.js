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

    document.querySelector('#start').addEventListener('click', function(){
        console.log('close');
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.modal').style.display = "none";
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

    document.querySelector('.roll').addEventListener('click', function(){
        console.log('Roll the Dice!');
        throwDice();
    });

    document.querySelector('.pass').addEventListener('click',function(){
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        setUpTurn();
    });

    function throwDice(){
        gameData.roll1 = Math.floor(Math.random()*6)+1; 
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        game.innerHTML =`<p>${gameData.players[gameData.index]}'s turn!</p>`;
        console.log(gameData.roll1);
        console.log(gameData.roll2);
        document.querySelector(".dice").innerHTML=
        `<img src="images/${gameData.dice[gameData.roll1-1]}" width="200" height="200">
        <img src="images/${gameData.dice[gameData.roll2-1]}" width="200" height="200">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1's are rolled...
        if (gameData.rollSum === 2){
            document.querySelector('.roll').disabled = true;
            console.log('snake eyes!');
            game.innerHTML = '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index]=0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(function(){
                document.querySelector('.roll').disabled = false;
                setUpTurn();
            }, 2000);
        }

        //if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            document.querySelector('.roll').disabled = true;
            console.log('one of the two dice rolled a 1');
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML = `<p>You rolled a 1. Switching to ${gameData.players[gameData.index]}</p>`;
            showCurrentScore();
            setTimeout(function(){
                document.querySelector('.roll').disabled = false;
                setUpTurn();
            }, 2000);
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
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        document.querySelector('.bear-points .points').innerHTML = `${gameData.score[0]}`;
        document.querySelector('.bunny-points .points').innerHTML = ` ${gameData.score[1]}`;
    }

})();