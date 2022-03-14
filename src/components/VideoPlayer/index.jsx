import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "./VideoDescription";
import useIntersectionVideoPlayer from '../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer({
  albumCover,
  description,
  username,
  avatar,
  src,
  songTitle,
  ...props
}) {
  const video = useRef(null);
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  return (
    <div className={styles.wrapper} onClick={handlePlay}>
      <video
        src={src}
        controls={false}
        ref={video}
        className={styles.video}
        loop
      />
      <i className={playerClassName} />
      <VideoPlayerActions {...props} avatar={avatar} username={username} />
      <VideoDescription
        albumImage={albumCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>
  );
}
