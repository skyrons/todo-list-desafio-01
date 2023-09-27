

import style from "./global.module.css"
import rocket from "./assets/rocket.png"
import todo from "./assets/todo.png"
// import { Form } from "./components/Form";
import { Task } from "./components/Task";
import { Button } from "./components/Button";
import { ChangeEvent, FormEvent, useState } from "react";

function App() {

  const [tasks, setTasks] = useState<Array<{ 
    content: string; 
    isFinished: boolean}>>(
      []
      ); 
  const [taskText, setTaskText] = useState('')
  console.log(tasks)


  function handleCreateNewTask(event: FormEvent){
    event?.preventDefault()

    setTasks([...tasks, {content: taskText, isFinished: false}]);
    setTaskText('')
  }

  function handleNewTaskChanged (event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setTaskText(event.target.value)
  }

  function deleteComment(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task.content !== taskToDelete
    })
    setTasks(tasksWithoutDeleteOne)
  }

  function countCompletedTasks() {
    return tasks.filter((task) => task.isFinished).length;
  }

  function toggleTaskCompletion(taskContent: string) {
  // Aqui, estamos recebendo o conteúdo da tarefa que queremos marcar como concluída ou não.
  setTasks((prevTasks) =>
    // Usamos o `setTasks` para atualizar o estado `tasks` do componente `App`.

    prevTasks.map((task) =>
      // Aqui, usamos a função `map` para percorrer todas as tarefas no estado anterior.

      task.content === taskContent
        ? { ...task, isFinished: !task.isFinished }
        // Se a tarefa atual tiver o mesmo conteúdo da tarefa que queremos marcar,
        // então criamos uma nova tarefa com todas as propriedades da tarefa atual,
        // mas invertemos o valor de `isFinished` usando `!task.isFinished`.
        // Isso marca a tarefa como concluída se não estiver concluída e vice-versa.

        : task
        // Se a tarefa atual não for a tarefa que estamos procurando, ela permanece inalterada.
    )
  );
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
                <span>{tasks.map( task => task).length}</span>
            </div>
              
            <div>
                <span className={style.taskFinished}>Concluidas </span>
                <span>{countCompletedTasks()}</span>
            </div>
          </header>

          <div>
            {tasks.map(task => {
              return  <Task
                onDeleteTask={deleteComment}
                key={task.content}
                content={task.content} 
                isFinished={task.isFinished}
                toggleTaskCompletion={toggleTaskCompletion}
                />
            })}
            
          </div>

        </main>
      </div>



    </div>
  )
}

export default App
