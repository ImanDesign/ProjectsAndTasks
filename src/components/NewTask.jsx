import { useRef, useState } from "react";

export default function NewTask({ onAdd }) {
  const [textEntered, setTextEntered] = useState('');

  function handleInputChange(e) {
    setTextEntered(e.target.value);
  }

  function handleAddTaskButton() {
    if(textEntered.trim() === ''){
        return;
    }
    onAdd(textEntered);
    setTextEntered(""); // Reset input
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={textEntered}
        onChange={handleInputChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTaskButton}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
