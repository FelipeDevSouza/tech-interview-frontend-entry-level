import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-yellow-500 text-black font-bold py-2 px-4 border border-black hover:border-transparent hover:bg-yellow-400
      uppercase transition-all"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
