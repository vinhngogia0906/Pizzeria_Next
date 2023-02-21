import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>WELCOME TO PIZZERIA</h1>
            <p className={styles.desc}>
                This is an offline technical test used by Chemist Warehouse as part of our interview process. Our
                Roles require you to be hands-on. We are looking for candidates with good technical skills, who
                follow best patterns, practices, and high coding standards. Give it your best shot and use this as an
                opportunity to show case your coding skills
            </p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
            </div>
        </div>
    )
}

export default PizzaList