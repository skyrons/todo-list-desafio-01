

import style from "./global.module.css"
import rocket from "./assets/rocket.png"
import todo from "./assets/todo.png"
import { Form } from "./components/Form";
import { Task } from "./components/Task";

function App() {

  return (
    <div className={style.page}>

      <header className={style.header}>
        <img src={rocket} className="rocket-logo" alt="rocket" />
        <img src={todo} className="todo-logo" alt="todo"/>
      </header>

      <div className={style.wrapper}>    
        <Form />
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
            <Task />
          </div>

        </main>
      </div>



    </div>
  )
}

export default App
