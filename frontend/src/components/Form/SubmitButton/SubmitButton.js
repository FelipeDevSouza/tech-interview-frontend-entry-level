import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black
      uppercase"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
