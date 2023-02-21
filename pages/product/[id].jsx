import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css"
import axios from "axios";

const Product = ({pizza}) => {
    const [price, setPrice] = useState(pizza.productPrice);
    const [quantity, setQuantity] = useState(1);
    const changePrice = (number) => {
        setPrice(price + number);
    };
    const [toppings, setToppings] = useState([]);
    const handlePriceChange = (e, option) => {
        const checked = e.target.checked;

        if(checked) {
            changePrice(option.price);
            setToppings((prev) => [...prev, option]);
        }
        else if (!checked) {
            changePrice(-option.price);
            setToppings(toppings.filter((topping) => topping._id !== option._id));
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                <Image alt="Pizza image" src={pizza.productImgStr} fill/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.productName}</h1>
                <br/>
                <span className={styles.price}>${price}</span>
                <br/>
                <p className={styles.description}>{pizza.productDescription}</p>
                <br/>
                <h3 className={styles.chooseTopp}>Choose your toppings, each on will add $1 extra to the total price</h3>
                <div className={styles.toppings}>
                    {pizza.productToppings.map((option) => (
                        <div className={styles.option} key={option._id}>
                        <input type="checkbox" name={option.text} id={option.text} className={styles.checkbox} onChange={(e) => handlePriceChange(e, option)}/>
                        <label htmlFor={option.text} className={styles.label}>{option.text}</label>
                    </div>
                    ))};
                </div>
                <div className={styles.addToCart}>
                    <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}   

export default Product

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props: {
        pizza: res.data,
      }
    }
  }