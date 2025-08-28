import styles  from "./Button.module.css"
import type { ButtonType } from "./ButtonType";



interface ButtonProps{
    text:string;
    type:ButtonType;
}

function Button({text , type}:ButtonProps){
    const buttonClassName  = styles[type.toLowerCase()]

    return (
        <button className={`${styles.button} ${buttonClassName}`}>
            {text}
        </button>
    )
}

export default Button