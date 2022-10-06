import { useState, useEffect } from 'react';

export default function ToDo() {
  const [toDo, setToDO] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const onChange = (e) => setToDO(e.target.value);
  console.log(toDo);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') return;
    // console.log(toDo);
    setToDoList((toDoList) => [toDo, ...toDoList]);
    setToDO('');
    // console.log(toDo);
  };
  console.log(toDoList);
  const deleteLi = (index) => {
    setToDoList((toDoList) =>
      toDoList.filter((_, curIndex) => curIndex !== index)
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
        {toDoList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteLi(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
