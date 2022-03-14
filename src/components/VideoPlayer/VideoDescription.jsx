import React from "react";
import AlbumDisk from "./AlbumDisk";
import styles from "./styles.module.css";
import SongTicker from "../SongTicker";

export default function VideoDescription({
  username,
  description,
  albumImage,
  songTitle,
}) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong className={styles.author} href={`/user/${username}`}>
            @{username}
          </strong>
        </section>
        <section>
          <p className={styles.text}>{description}</p>
          <SongTicker songTitle={songTitle} />
        </section>
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>
    </footer>
  );
}
