import React from "react";
import { Heart } from "../icons/Heart";
import styles from "./styles.module.css";
import { Comment } from "../icons/Comments";
import { Share } from "../icons/Share";

export default function VideoPlayerAction({
  likes = 12,
  avatar,
  comments = 12,
  shares = 12,
  hearted = false,
  username
}) {

    const handlelikes = ()=>{

    };

    const handleComment = ()=>{

    };

    const handleShare = ()=>{

    };

  return (
    <aside className={styles.actions}>
        <div className={styles.user}>
          <img alt={username} src={avatar} />
          <img src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' />
        </div>
        <button className={styles.action} onClick={handlelikes}>
          <Heart width='45' />
          <strong title="liked">{likes}</strong>
        </button>
        <button className={styles.action} onClick={handleComment}>
          <Comment width='45'  />
          <strong title="comments">{comments}</strong>
        </button>
        <button className={styles.action} onClick={handleShare}>
          <Share width='45' />
          <strong title="shares">{shares}</strong>
        </button>
    </aside>
  );
}
