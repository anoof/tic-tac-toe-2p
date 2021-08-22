import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const styles = {
    width: '200px',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        //If user clicks on ocupied square or if game is won
        if (winner || boardCopy[i]) return;
        //Put an X or an O on clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Player ' + (xIsNext ? 'X' : 'O') + ' moves'}</p>
                {winner ? renderMoves() : ''}
            </div>
        </>
    )
}
export default Game;