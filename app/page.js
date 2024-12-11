"use client";
import { useState } from "react";
export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maintask, setMaintask] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setMaintask([...maintask, { title, description }]);
    setTitle("");
    setDescription("");
    console.log(maintask);
  }

  let renderList = (
    <h1 className="text-xl font-bold text-center my-10 text-red-500">
      NO TASK YET...
    </h1>
  );

  renderList = maintask.map((taskItem, idx) => {
    // console.log(`${taskItem.title} - ${taskItem.description}`);
    return (
      <div>
        <div className="flex justify-between rounded">
          <h2 className="p-2 m-2 w-1/3 bg-[#B2C9AD] font-bold text-xl font-serif rounded">
            {taskItem.title}
          </h2>
          <h4 className="p-2 m-2 w-2/3 bg-[#91AC8F] font-mono rounded">
            {taskItem.description}
          </h4>
        </div>
      </div>
    );
  });
  return (
    <div className="m-2">
      <h1 className="bg-slate-800 text-5xl text-[#00FF9C] text-center font-serif font-bold m-2 p-10 rounded">
        Todo List
      </h1>
      <form className="m-2 rounded bg-slate-400 p-5" onSubmit={handleSubmit}>
        <div className="flex justify-evenly">
          <input
            type="text"
            placeholder="Task Title"
            className="m-2 p-4 border-slate-500 text-xl border-4 rounded"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <input
            type="text"
            placeholder="Task Description"
            className="m-2 p-4 border-slate-500 text-xl border-4 rounded"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
          <button className="text-lg font-bold text-white bg-red-400 m-2 p-4 rounded">
            Add Task
          </button>
        </div>
      </form>
      <div className="m-2">{renderList}</div>
    </div>
  );
}
