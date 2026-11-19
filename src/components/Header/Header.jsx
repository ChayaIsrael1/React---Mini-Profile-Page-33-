import styles from "./Header.module.css";

function Header ({title}){
    return (
        <h1 className = {styles.Header}>
            {title}</h1>
    )
}

export default Header