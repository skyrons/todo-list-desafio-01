import { FormEvent, useState } from 'react';
import { Button } from './Button'
import style from './Form.module.css'


interface TaskProps {
  content: string,
  isFinished: boolean
}


export function Form () {
  
    const [ task, setTask] = useState<TaskProps[]>([]);
    
    console.log(task)
    const [ newTaskText, setNewTaskText ] = useState({} as TaskProps);
   

    function handleCreateNewTask(event: FormEvent) {
      event.preventDefault();

      setTask(state => [...state, newTaskText]);
      setNewTaskText({} as TaskProps);
      
    }
    
    return(
        <form onSubmit={handleCreateNewTask}>
            <input
              className={style.inputClass}
              type="text"
              value={newTaskText.content}
              onChange={ (event) => setNewTaskText({...newTaskText, content: event.target.value})}
              placeholder="Adicione uma nova tarefa" 
            />
            <Button />
      </form>
    )
   
}