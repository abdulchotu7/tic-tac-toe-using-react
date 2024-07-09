import React from 'react';
import "../index.css"

function Cell({ value, onClick }) {
  return (
    <button
      className='h-[40px] w-[40px] bg-yellow-600 rounded-sm border border-white-600 flex items-center justify-center text-white text-xl shadow-up'
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Cell;
