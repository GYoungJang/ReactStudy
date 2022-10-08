import { useState } from 'react';

export default function ToDo() {
  const [toDo, setToDO] = useState('');
  const [toDoLists, setToDoList] = useState([]);
  const onChange = (e) => setToDO(e.target.value);
  console.log(toDo);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') return;
    // console.log(toDo);
    setToDO('');
    setToDoList((toDoLists) => [toDo, ...toDoLists]);
    // console.log(toDo);
  };
  console.log(toDoLists);
  const deleteLi = (index) => {
    setToDoList((toDoLists) =>
      toDoLists.filter((toDoList, curIndex) => curIndex !== index)
    );
  };
  return (
    <div>
      <h1>MY To DO List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={toDo}
          placeholder="Write Your To DO"
        />
        <button type="submit">Add To Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDoLists.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteLi(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
