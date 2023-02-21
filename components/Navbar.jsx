import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
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
                    <Link href="/" passHref>
                        <li className={styles.listItem}>
                            Home page
                        </li>
                    </Link>
                    <Image src="/img/pizzeria-logo.png" alt="Pizzeria logo" width="150" height="120"/>
                    <Link href="/products/preston" passHref>
                        <li className={styles.listItem}>
                            Preston
                        </li>
                    </Link>
                    <Link href="/products/southbank" passHref>
                        <li className={styles.listItem}>
                            Southbank
                        </li>
                    </Link>
                </ul>
            </div>
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="Cart image" width="30" height="30"/>
                        <div className={styles.cartCounter}>{quantity}</div>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}

export default Navbar