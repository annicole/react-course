import React from "react"
import { MusicIcon } from "../icons/MusicIcon";
import styles from "./styles.module.css";

export default function SongTicker({songTitle}){
    console.log({songTitle})
    return(
        <div className={styles.song}>
            <MusicIcon />
             <marquee>{songTitle}</marquee>
        </div>
    )
}