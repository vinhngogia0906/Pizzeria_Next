import styles from "../styles/PizzaCard.module.css"
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({pizza}) => {
    return (
        <div className={styles.container}>
            <Link href={`/products/${pizza.productStore}/${pizza._id}`} passHref>
                <Image src={pizza.productImgStr} alt="Image of a pizza" width="500" height="500"/>
            </Link>
            <h1 className={styles.title}>{pizza.productName}</h1>
            <span className={styles.price}>${pizza.productPrice}</span>
            <p className={styles.description}>
            {pizza.productDescription}
            </p>
        </div>
    )
}

export default PizzaCard