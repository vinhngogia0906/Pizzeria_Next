import styles from "../styles/Cart.module.css"
import Image from "next/image"

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tableRowHeader}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Toppings</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td>
                            <div className={styles.imageContainer}>
                                <Image alt="Pizza Image" src="/img/pizza.png" fill style={{objectFit:"cover"}}/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.prodName}>Capricciosa</span>
                        </td>
                        <td>
                            <span className={styles.prodToppings}>Cheese, Salami</span>
                        </td>
                        <td>
                            <span className={styles.prodPrice}>22</span>
                        </td>
                        <td>
                            <span className={styles.prodQuan}>1</span>
                        </td>
                        <td>
                            <span className={styles.total}>22</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <p className={styles.totalTextTitle}>Subtotal:</p>$22
                    </div>
                    <div className={styles.totalText}>
                        <p className={styles.totalTextTitle}>GST:</p>$2
                    </div>
                    <div className={styles.totalText}>
                        <p className={styles.totalTextTitle}>Total:</p>$24
                    </div>
                    <button className={styles.button}>CHECK OUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;