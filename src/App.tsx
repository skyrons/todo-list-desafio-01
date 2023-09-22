import { FormEvent } from "react";

import style from "./global.module.css"
import rocket from "./assets/rocket.png"
import todo from "./assets/todo.png"

function App() {

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    console.log("Creating new task");
  }


  const task =[
    'texto 1',
    'texto 2',
  ]

  return (
    <div className={style.page}>

      <header className={style.header}>
        <img src={rocket} className="rocket-logo" alt="rocket" />
        <img src={todo} className="todo-logo" alt="todo"/>
      </header>

      <div className={style.wrapper}>    
        <form onSubmit={handleCreateNewTask}>
          <input type="text" />
          <button
            type="submit"
            className="{style.create-task-button}">
                Criar
            </button>
        </form>

        <main className={style.content}>
          <header >
            <div>
                <span>Tarefas Criadas </span>
                <span>0</span>
            </div>
              
            <div>
                <span>Concluidas </span>
                <span>0</span>
            </div>
          </header>

          <div>
            {task.map(task => task)}
          </div>

        </main>
      </div>



    </div>
  )
}

export default App
