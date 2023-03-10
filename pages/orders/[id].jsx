import Image from "next/image"
import styles from "../../styles/Order.module.css"
import axios from "axios";

const Order = ({order}) => {
    const status = order.status;
    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inProgress
        if(index - status > 1) return styles.notStarted
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tr className={styles.tableRowHeader}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td>
                                <span className={styles.orderID}>{order._id}</span>
                            </td>
                            <td>
                                <span className={styles.customer}>{order.customer}</span>
                            </td>
                            <td>
                                <span className={styles.address}>{order.address}</span>
                            </td>
                            <td>
                                <span className={styles.total}>{order.total}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/paid.png" alt="icon shows money paid" width={30} height={30}/>
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="check icon" width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/bake.png" alt="icon baking" width={30} height={30}/>
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="check icon" width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/bike.png" alt="icon shows food on the way" width={30} height={30}/>
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="check icon" width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/delivered.png" alt="Food delivered" width={30} height={30}/>
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="check icon" width={20} height={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>GST:</b>${0.1 * order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>${1.1 * order.total}
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
        props: { order: res.data},
    };
};

export default Order