import React from "react"
import styles from "./styles.module.css"

export default function AlbumDisk({albumImage}){
    return(
        <div className={styles.album}>
            <img src={albumImage} className={styles.albumImage} />
        </div>
    )
}