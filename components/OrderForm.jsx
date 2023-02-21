import { useState } from "react";
import styles from "../styles/OrderForm.module.css";

const OrderForm = ({totalPrice, createOrder}) => {
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const SubmitOrder = () => {
        createOrder({
            customer: customerName,
            address: customerAddress,
            total: totalPrice,
            paymentMethod: 0,
        })
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" placeholder="Mr. Anderson" className={styles.input} onChange={(e) => setCustomerName(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Inside the Matrix" className={styles.input} onChange={(e) => setCustomerAddress(e.target.value)}/>
                </div>
                <button className={styles.button} onClick={SubmitOrder}>Submit Order</button>
            </div>
        </div>
    )
};

export default OrderForm;