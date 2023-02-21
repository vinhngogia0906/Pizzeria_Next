import styles from "../styles/Footer.module.css"
import Image from "next/image"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <h2 className={styles.storeTitle}>Pizzeria Southbank</h2>
                    <p className={styles.text}>
                        250 Sturt Street
                        <br/>SOUTHBANK, VIC 3006
                        <br/> Melbourne
                    </p>
                </div>
                <div className={styles.card}>
                    <br/>
                    <h2 className={styles.storeTitle}>Pizzeria Preston</h2>
                    <p className={styles.text}>
                        475-479 High Street
                        <br/>PRESTON, VIC 3072
                        <br/> Melbourne
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY TO FRIDAY
                        <br/> 9am - 21pm
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer