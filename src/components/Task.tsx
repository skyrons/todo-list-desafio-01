import { useState } from 'react'

import style from './Task.module.css'
import trash from '../assets/trash.png'


interface Task {
    content: string,
    isFinished?: boolean
    onDeleteTask: (task: string) => void
}

export function Task({content, isFinished = false, onDeleteTask}: Task){

    const [isChecked, setIsChecked] = useState(isFinished)

    console.log(isChecked)

    function handleRadioChange () {
        setIsChecked(!isChecked)
    }
    function handleDeleteTask () {
        onDeleteTask(content)
    }

    return (
        <div className={style.taskBox}>
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