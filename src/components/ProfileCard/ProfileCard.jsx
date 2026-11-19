import Button from "../Button/Button.jsx";
import styles from "./ProfileCard.module.css";

function Card ({avatar,name,description,type}){
    return(
        <div className={styles.card}>
        <img src={avatar} alt={name} className= {styles.avatar}/>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <Button type={type}/>
        </div>
    )
}

export default Card;