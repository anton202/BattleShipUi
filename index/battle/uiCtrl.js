const uiCtrl = (function () {

    const creatTable = function (positions) {
        let tempArr = positions.map((position) => position.shipPosition)
        let shipsPositions = [].concat(...tempArr);
        const battleBoard = document.querySelector('table');

        for (let x = 0; x < 5; x++) {
            const tr = document.createElement('tr');
            tr.className = 'boardBorders';

            for (let y = 0; y < 5; y++) {
                const td = document.createElement('td');
                td.dataset.row = x;
                td.dataset.column = y;
                if (shipsPositions.includes(Number(x + '' + y))) {
                    td.style.backgroundColor = '#cce6ff';
                }
                td.className = 'boardBorders';
                tr.appendChild(td);
            }
            battleBoard.appendChild(tr);
        }

    }

    const createOpponentTable = function () {
       let player2Area =  document.querySelector('.player2Ships');
       let opponentTurn = document.createElement('h2');
       opponentTurn.innerText = 'Opponent Turn';
       opponentTurn.className = 'opponent'
       opponentTurn.style.color = '#F0F0F0';
       player2Area.insertBefore(opponentTurn,document.querySelector('#opponentBoard'));

        for (let x = 0; x < 5; x++) {
            const tr = document.createElement('tr');
            tr.className = 'boardBorders';

            for (let y = 0; y < 5; y++) {
                const td = document.createElement('td');
                td.dataset.row = x;
                td.dataset.column = y;
                td.className = 'boardBorders';
                tr.appendChild(td);
            }
            document.querySelector('#opponentBoard').appendChild(tr);
            document.querySelector('img').style.display = 'none';
        }
        document.querySelector('#opponentBoard').style.display = 'table';
    }

    const positionRevealed = function (position) {
        let table = document.querySelector('.battleBoard');
        let rows = Array.from(table.rows);

        for (let i = 0; i < rows.length; i++) {
            for (let x = 0; x < 5; x++) {
                let cells = Array.from(rows[i].cells);
                let positionToNum = Number(cells[x].dataset.row + cells[x].dataset.column);
                if (position === positionToNum) {
                    cells[x].style.backgroundColor = '#ff9999';
                    return;
                }
            }
        }
    }



    const waitingForOpponent = function(){
        playerTable = document.querySelector('#opponentBoard');
        playerTable.style.display = 'none';
        document.querySelector('img').style.display = 'block';
        document.querySelector('.opponent').style.display = 'none';
        document.querySelector('.yourTurn').style.color = '#F0F0F0';
    }

    const roomName = function (roomName) {
        const h1 = document.querySelector('h1');
        h1.textContent = roomName;
    }


    return {
        creatTable,
        roomName,
        createOpponentTable,
        positionRevealed,
        waitingForOpponent
    }
})();