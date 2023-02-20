import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="Image of a pizza" width="500" height="500"/>
            <h1 className={styles.title}>Capricciosa</h1>
            <span className={styles.price}>$20</span>
            <p className={styles.description}>
            Contains Cheese, Ham, Mushrooms, Olives
            </p>
        </div>
    )
}

export default PizzaCard