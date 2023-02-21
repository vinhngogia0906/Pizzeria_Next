import axios from "axios";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import { useState } from "react";

const Index = ({products, stores}) => {
    const [pizzaList, setPizzaList] = useState(products);
    const [storeList, setStoreList] = useState(stores);
    const handleAddProd = async () => {
        try {
            const newProd = {
                "productName":"New Pizza",
                "productDescription":"new description",
                "productImgStr":"/img/pizza.png",
                "productStore":"preston",
                "productPrice": 20,
                "productToppings": [
                    {"text": "Cheese",
                    "price": 1},
                    {"text": "Capsicum",
                    "price": 1},
                    {"text": "Salami",
                    "price": 1},
                    {"text": "Olives",
                    "price": 1},
                ]
            };
            const res = await axios.post("http://localhost:3000/api/products", newProd);
            setPizzaList((prev) => [...prev, newProd]);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDeleteProd = async (id) => {
        try {
            const res = await axios.delete("http://localhost:3000/api/products/" + id);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (error) {
            console.log(error);
        }
    };
    const handleAddStore = async () => {
        try {
            try {
                const newStore = {
                    "storeName":"New Pizza",
                    "address":"New address"
                };
                const res = await axios.post("http://localhost:3000/api/stores", newStore);
                setPizzaList((prev) => [...prev, newStore]);
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteStore = async (id) => {
        try{
            const res = await axios.delete("http://localhost:3000/api/stores/" + id);
            setStoreList(storeList.filter((store) => store._id !== id));
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <button onClick={() => handleAddProd()}>Add Product</button>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tableRowHeader}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {products.map((product) => (
                            <tr className={styles.tableRow} key={product._id}>
                            <td>
                                <Image src={product.productImgStr} alt="pizza image" width={50} height={50} style={{objectFit:"cover"}}/>
                            </td>
                            <td>{product._id}</td>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button} onClick={() => handleDeleteProd(product._id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.item}>
            <h1 className={styles.title}>Stores</h1>
            <button onClick={() => handleAddStore()}>Add Store</button>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tableRowHeader}>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {stores.map((store) => (
                            <tr className={styles.tableRow} key={store._id}>
                                <td>{store.storeName}</td>
                                <td>{store.address}</td>
                                <td>
                                    <button className={styles.button}>Edit</button>
                                    <button className={styles.button} onClick={() => handleDeleteStore(store._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const productsList = await axios.get("http://localhost:3000/api/products");
    const storesList = await axios.get("http://localhost:3000/api/stores");

    return{
        props: {
            products: productsList.data,
            stores: storesList.data
        }
    }
};

export default Index