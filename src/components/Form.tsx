import { FormEvent } from 'react';
import { Button } from './Button'
import style from './Form.module.css'

function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    console.log("Creating new task");
  }

export function Form () {
    return(
        <form onSubmit={handleCreateNewTask}>
            <input
            className={style.inputClass}
            type="text"
            placeholder="Adicione uma nova tarefa" />
            <Button />
      </form>
    )
   
}