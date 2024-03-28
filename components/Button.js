import styles from "./Button.module.scss";

const Button = ({ backgroundColor, label, clickHandler }) => {
    return <button 
        className={styles.btn} 
        onClick={clickHandler}
        style={{
            backgroundColor: backgroundColor,
        }}
        >
        {label}
    </button>;
}
export default Button;