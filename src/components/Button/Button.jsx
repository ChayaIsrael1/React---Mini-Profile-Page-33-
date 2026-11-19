import styles from './Button.module.css'
function Button({type}){
    return(
        <button className={`${styles.btn} ${styles[type]}`}>'Click'</button>

    )
}
export default Button