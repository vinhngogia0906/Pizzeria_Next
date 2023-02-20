import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="Phone shape icon" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order now</div>
                    <div className={styles.text}>Ph: 0123456</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        Home page
                    </li>
                    <li className={styles.listItem}>
                        Products
                    </li>
                    <Image src="/img/pizzeria-logo.png" alt="Pizzeria logo" width="150" height="120"/>
                    <li className={styles.listItem}>
                        Menu
                    </li>
                    <li className={styles.listItem}>
                        Contact
                    </li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="Cart image" width="30" height="30"/>
                    <div className={styles.cartCounter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar