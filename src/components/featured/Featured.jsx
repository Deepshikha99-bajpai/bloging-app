import React from 'react'
import styles from "./featured.module.css"
import Image from"next/image";
const Featured =() => {
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>
        <b> Hey, Everyone!</b>
        </h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
             <Image src ="/davv.png"alt=""fill className={styles.image}/>
            </div>
        <div className ={styles.textContainer}>
         <h1 className={styles.postTitle}>Hey guyys please like and subscribe our page</h1>
         
        <p className={styles.postDesc}
        >Explore fresh ideas and unique stories on DAVV blog</p>
        <button className={styles.button}>Read more</button>
        </div>
        </div>
        </div>
    );
    };
export default Featured;
