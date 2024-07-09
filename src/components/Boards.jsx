import React, { useState } from 'react';
import Cell from './Cell';

function Boards() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (cells[index] !== "" || winner) return;

    const newCells = cells.slice();
    newCells[index] = isXNext ? "X" : "O";
    setCells(newCells);
    setIsXNext(!isXNext);
    checkWinner(newCells);
  };

  const checkWinner = (cells) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setWinner(cells[a]);
        return;
      }
    }

    if (cells.every(cell => cell !== "")) {
      setWinner("Draw");
    }
  };

  const renderCell = (index) => {
    return (
      <Cell
        value={cells[index]}
        onClick={() => handleClick(index)}
      />
    );
  };

  const renderRow = (start) => {
    return (
      <div className='flex justify-center items-center'>
        {renderCell(start)}
        {renderCell(start + 1)}
        {renderCell(start + 2)}
      </div>
    );
  };

  return (
    <div className='my-4'>
      {winner ? (
        <div className='text-center text-2xl'>
          {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
        </div>
      ) : (
        <>
          {renderRow(0)}
          {renderRow(3)}
          {renderRow(6)}
        </>
      )}
    </div>
  );
}

export default Boards;
