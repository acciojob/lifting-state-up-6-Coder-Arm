
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todos , setTodos] = useState([{'todo' : 'Learn React', 'isCompleted' : false},
{'todo' : 'Build a React app', 'isCompleted' : false},{'todo' : 'Deploy the React app', 'isCompleted' : false}])

function completedHandler(index){
    const updatedList = todos.map((item,idx) => {
      if(idx === index){
        return {...item,'isCompleted' : true}
    }
    else return item
  });
    setTodos(updatedList)
}


  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
        <ul>
        <h2>Child Component</h2>
          {
          todos.map((item,idx) => {
            return(
              <li key={idx}>{item.todo }
             { item.isCompleted === false  && <button onClick={()=>completedHandler(idx)}>Complete</button>}</li>
            )
          })
          }
        </ul>
      </div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
