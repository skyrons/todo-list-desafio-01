import style from './Task.module.css'
import trash from '../assets/trash.png'

export function Task(){
    return (
        <div className={style.taskBox}>
            <input type="radio" />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button className={style.deleteButton}>
                <img src={trash} alt="" />
            </button>
        </div>
    )
}