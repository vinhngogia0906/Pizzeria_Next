import Image from "next/image";
import { useState } from "react";
import styles from "../../../styles/Product.module.css"

const Product = () => {
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAPRICCIOSA",
        price: 20,
        desc: "Capricciosa Pizza is a classic Italian pizza. The 'Capricciosa', as everybody calls it, is on every pizzeria's menu, usually under the list of traditional pizzas. Its staple ingredients are tomato puree, mozzarella, cremini mushrooms, artichoke hearts, black olives, and prosciutto cotto (Italian cooked ham)."
    };
    const [isCheese, setIsCheese] = useState(false);
    const [isCapsicum, setIsCapsicum] = useState(false);
    const [isSalami, setIsSalami] = useState(false);
    const [isOlives, setIsOlives] = useState(false);
    const [price, setPrice] = useState(pizza.price);
    const priceCheeseHandler = () => {
        setIsCheese(!isCheese);
        if(!isCheese){
            setPrice(price + 1)
        }
        if(isCheese){
            setPrice(price -1)
        }
    }
    const priceCapsicumHandler = () => {
        setIsCapsicum(!isCapsicum);
        if(!isCapsicum){
            setPrice(price + 1)
        }
        if(isCapsicum){
            setPrice(price -1)
        }
    }
    const priceSalamiHandler = () => {
        setIsSalami(!isSalami);
        if(!isSalami){
            setPrice(price + 1)
        }
        if(isSalami){
            setPrice(price -1)
        }
    }
    const priceOlivesHandler = () => {
        setIsOlives(!isOlives);
        if(!isOlives){
            setPrice(price + 1)
        }
        if(isOlives){
            setPrice(price -1)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                <Image alt="Pizza image" src={pizza.img} fill/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <br/>
                <span className={styles.price}>${price}</span>
                <br/>
                <p className={styles.description}>{pizza.desc}</p>
                <br/>
                <h3 className={styles.chooseTopp}>Choose your toppings, each on will add $1 extra to the total price</h3>
                <div className={styles.toppings}>
                    <div className={styles.option}>
                        <input type="checkbox" name="Cheese" id="Cheese" className={styles.checkbox} onChange={priceCheeseHandler}/>
                        <label htmlFor="Cheese" className={styles.label}> Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="Capsicum" id="Capsicum" className={styles.checkbox} onChange={priceCapsicumHandler}/>
                        <label htmlFor="Capsicum" className={styles.label}> Capsicum</label>  
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="Salami" id="Salami" className={styles.checkbox} onChange={priceSalamiHandler}/>
                        <label htmlFor="Salami" className={styles.label}> Salami</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="Olives" id="Olives" className={styles.checkbox} onChange={priceOlivesHandler}/>
                        <label htmlFor="Olives" className={styles.label}> Olives</label>
                    </div>
                </div>
                <div className={styles.addToCart}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}   

export default Product