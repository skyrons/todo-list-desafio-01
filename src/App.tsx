

import style from "./global.module.css"
import rocket from "./assets/rocket.png"
import todo from "./assets/todo.png"
// import { Form } from "./components/Form";
import { Task } from "./components/Task";
import { Button } from "./components/Button";
import { ChangeEvent, FormEvent, useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]) 
  const [taskText, setTaskText] = useState('')
  console.log(tasks)


  function handleCreateNewTask(event: FormEvent){
    event?.preventDefault()

    setTasks([...tasks, taskText]);
    setTaskText('')
  }

  function handleNewTaskChanged (event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setTaskText(event.target.value)
  }
  
  return (
    <div className={style.page}>

      <header className={style.header}>
        <img src={rocket} className="rocket-logo" alt="rocket" />
        <img src={todo} className="todo-logo" alt="todo"/>
      </header>

      <div className={style.wrapper}>    
        {/* <Form /> */}
        <form onSubmit={handleCreateNewTask}>
          <input
            className={style.inputClass}
            type="text" 
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChanged}
            value={taskText}
          />
          <Button />
        </form>
        <main className={style.content}>
          <header >
            <div>
                <span className={style.taskCount} >Tarefas Criadas </span>
                <span>0</span>
            </div>
              
            <div>
                <span className={style.taskFinished}>Concluidas </span>
                <span>0</span>
            </div>
          </header>

          <div>
            {tasks.map(task => {
              return  <Task
                key={task}
                content={task} />
            })}
            
          </div>

        </main>
      </div>



    </div>
  )
}

export default App
