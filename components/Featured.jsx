import Image from "next/image"
import { useState } from "react";
import styles from "../styles/Featured.module.css"
const Featured = () => {
    const [bannerIndex, setBannerIndex] = useState(0);
    const handleArrow = (direction) => {
        if(direction === "l"){
            setBannerIndex(bannerIndex !== 0 ? bannerIndex - 1 : 2)
        }
        else if(direction === "r") {
            setBannerIndex(bannerIndex !== 2 ? bannerIndex + 1 : 0)
        }
    }
    const bannerImages = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left : 0}} onClick={() => handleArrow("l")}>
                <Image src="/img/arrowl.png" alt="left arrow image" fill style={{objectFit:"contain"}}/>
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*bannerIndex}vw)`}}>
                {bannerImages.map((img, i) => (
                    <div className={styles.bannerContainer} key ={ i }>
                        <Image src={img} alt="Banner images for Pizzeria" fill style={{objectFit:"contain"}}/>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right : 0}} onClick={() => handleArrow("r")}>
                <Image src="/img/arrowr.png" alt="left arrow image" fill style={{objectFit:"contain"}}/>
            </div>
        </div>
    )
}
export default Featured