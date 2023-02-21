import axios from "axios";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { reset } from "@/redux/cartSlice";
import { useState } from "react";
import OrderForm from "@/components/OrderForm";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const router = useRouter();
    const [checkOut, setCheckOut] = useState(false);
    const createOrder = async (data) => {
        try{
            const res = await axios.post("http://localhost:3000/api/orders", data);
            res.status === 201 && router.push("/orders/" + res.data._id);
            dispatch(reset());
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tableRowHeader}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Toppings</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {cart.products.map((product) => (
                            <tr className={styles.tableRow} key={product._id}>
                                <td>
                                    <div className={styles.imageContainer}>
                                        <Image alt="Pizza Image" src={product.productImgStr} fill style={{objectFit:"cover"}}/>
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.prodName}>{product.productName}</span>
                                </td>
                                <td>
                                    <span className={styles.prodToppings}>
                                        {product.productToppings.map((topping) => (
                                            <span key={topping._id}>
                                                {topping.text}, 
                                            </span>
                                        ))};
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.prodPrice}>${product.productPrice}</span>
                                </td>
                                <td>
                                    <span className={styles.prodQuan}>{product.quantity}</span>
                                </td>
                                <td>
                                    <span className={styles.total}>${product.productPrice * product.quantity}</span>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <p className={styles.totalTextTitle}>Subtotal:</p>${cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <p className={styles.totalTextTitle}>GST:</p>${0.1 * cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <p className={styles.totalTextTitle}>Total:</p>${1.1 * cart.total}
                    </div>
                    <button className={styles.button} onClick={() => setCheckOut(true)}>CHECK OUT</button>
                </div>
            </div>
            {checkOut && (
                <OrderForm total = {cart.total} createOrder={createOrder}/>
            )}
        </div>
    );
}

export default Cart;