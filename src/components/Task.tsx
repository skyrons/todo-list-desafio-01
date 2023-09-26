import { useState } from 'react'

import style from './Task.module.css'
import trash from '../assets/trash.png'


interface Task {
    content: string,
    isFinished?: boolean
}

export function Task({content, isFinished = false}: Task){

    const [isChecked, setIsChecked] = useState(isFinished)

    console.log(isChecked)
    function handleRadioChange () {
        setIsChecked(!isChecked)
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
            
            <button className={style.deleteButton}>
                <img src={trash} alt="" />
            </button>
        </div>
    )
}