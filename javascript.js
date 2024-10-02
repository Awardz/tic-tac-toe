function Gameboard()
{
    const board = [];
   
    const getBoard = () => board;
}

const test = document.querySelectorAll(".square");


function GameController()
{
    const player1 = 
    {
        name: "Player1",
        marker: 'X'
    }

    const player2 = 
    {
        name: "Player2",
        marker: 'O'
    }

    let player1turn = true;

    playerToggle = () =>
        player1turn = !player1turn;

    let num = 0;

    test.forEach((div) =>
    {
        div.addEventListener("click", () =>
        {
            if(div.innerHTML === "")
            {
                if(player1turn === true)
                {
                    div.style.background = "purple";
                    div.innerHTML = player1.marker;
                    num++
                    playerToggle();
                }
                else
                {
                    div.style.background = "green";
                    div.innerHTML = player2.marker;
                    num++
                    playerToggle();
                }
            }
            if(num === 9)
                console.log("Game Over")
        })
    })

    
    const winConditions = 
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
}

GameController();