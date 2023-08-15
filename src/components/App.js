
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todos , setTodos] = useState([{'todo' : 'Learn React', 'mark' : 'incomplete'},
{'todo' : 'Build a React app', 'mark' : 'incomplete'},{'todo' : 'Deploy the React app', 'mark' : 'incomplete'}])

function completedHandler(index){
    const updatedList = todos.map((item,idx) => {
      if(idx === index){
        return {...item,mark : 'completed'}
    }
    else return item
  });
    setTodos(updatedList)
}


  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
        <h2>Child Component</h2>
        <ul>
          {
          todos.map((item,idx) => {
            // console.log(item);
            return(
              <li key={idx}>{item.todo }
             { item.mark !== 'completed' && <button onClick={()=>completedHandler(idx)}>Complete</button>}</li>
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
