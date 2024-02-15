import { useState } from 'react';
import './App.css'

function App() {

  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);



  const addlist = () => {
    console.log("clicked");
    if (task === '') return;
    setIndex(index + 1);
    setTask([...task, input]); //using [] coz we need to create a new array everytime with current input and if we use () it will recognize it as a function arguments coz spread operator spreds its all iundivisual elements;
    setInput("")
  }



  const removelist = (index) => {
    const newlist = task.filter((element, id) => {  //filter function has two parameters 1st id the current element and the second is the id of the current element
      return index != id;
    })

    setTask(newlist)
  }

  return (
    <>
      <h1>To-Do React App</h1>
      <div className="main">
        <div className="inputarea-container">
          <input type="text" className='textarea' value={input} onChange={event => setInput(event.target.value)} placeholder='Enter your Tasks' />
          <button type="button" className='addbtn' onClick={addlist}>Add Task</button>
        </div>
        <div className="listarea">
          <ol className='list'>
            {
              task.map((todo, index) => {
                return (
                  <div className='task'>
                    <li key={index}>{todo}</li>
                    <button className='deletebtn' onClick={() => removelist(index)}>Delete</button>
                  </div>
                )
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
