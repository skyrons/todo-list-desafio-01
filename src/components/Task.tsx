import { useState } from 'react'

import style from './Task.module.css'
import trash from '../assets/trash.png'


export interface TaskProps {
    content: string,
    isFinished?: boolean
    onDeleteTask: (task: string) => void
    toggleTaskCompletion: (task: string) => void
}

export function Task({content, isFinished = false, onDeleteTask, toggleTaskCompletion}: TaskProps){

    const [isChecked, setIsChecked] = useState(isFinished)

    console.log(isChecked)

    function handleRadioChange () {
        setIsChecked(!isChecked)
        toggleTaskCompletion(content);
    }
    function handleDeleteTask () {
        // verify box is checked
        const verifyDelete = confirm('Are you sure you want to delete?')

        if(verifyDelete) {
            onDeleteTask(content)
        }

        
    }

    return (
        <div className={ isChecked ? style.checked :  style.taskBox} >
                <div className={style.leftContent}>
                    <input 
                        type="radio"
                        className={style.inputRadio}
                        checked={isChecked}
                        onChange={handleRadioChange}
                        />
                    <p>{content}</p>
                </div>
                
                <button 
                    className={style.deleteButton}
                    onClick={handleDeleteTask}
                    >
                    <img src={trash} alt="" />
                    
                </button>
                
        </div>
    )
}