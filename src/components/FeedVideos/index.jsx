import React, { useEffect, useState } from "react"
import VideoPlayer from "../VideoPlayer/index.jsx"
import styles from "./styles.module.css"
import {getVideos} from '../../services/index'
const VIDEOS = [

    {
        id: 1,
        username: 'moniquehdza',
        likes: 7624,
        shares: 234,
        comments: 82,
        songTitle: 'Spongebob Tomfoolery - Dante9k Remix',
        albumImage:'assets/album.jpeg',
        description: 'Postre Frío de Fresas 🍓 ! #fresas #postredefresas #recetasinhorno #postrefacil',
        src: 'https://v16-webapp.tiktok.com/f27c85e68289266f8e463f65733a8f4d/6226b491/video/tos/maliva/tos-maliva-ve-0068c799-us/5b60f23fecef4595b3bfd6972714b1db/?a=1988&br=4678&bt=2339&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Th1ZbQDXq&l=20220307194202010191053215110A3514&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=andwbzk6ZjdmOzMzZzczNEApNmkzNWU3ZDs6N2hlZ2Y6OGdrbS9ycjQwNmZgLS1kMS9zc2AtYy00MjI1My5jMzQ0YDU6Yw%3D%3D&vl=&vr='
    },
    {
        id: 2,
        author: 'kulinaria.recetas',
        description: 'ARROLLADITOS PRIMAVERA 🌯 #recetas #rolls #empanaditaschinas #arrolladitosprimavera #recetafaci ',
        likes: 7624,
        shares: 234,
        comments: 82,
        songTitle: 'Spongebob Tomfoolery - Dante9k Remix',
        albumImage:'assets/album.jpeg',
        src: 'https://v16-webapp.tiktok.com/f27c85e68289266f8e463f65733a8f4d/6226b491/video/tos/maliva/tos-maliva-ve-0068c799-us/5b60f23fecef4595b3bfd6972714b1db/?a=1988&br=4678&bt=2339&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Th1ZbQDXq&l=20220307194202010191053215110A3514&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=andwbzk6ZjdmOzMzZzczNEApNmkzNWU3ZDs6N2hlZ2Y6OGdrbS9ycjQwNmZgLS1kMS9zc2AtYy00MjI1My5jMzQ0YDU6Yw%3D%3D&vl=&vr='
    }]

export default function FeedVideos() {

    const [arrVideos, setArrVideo] = useState([])
    const [error,SetError] = useState()

    useEffect(()=>{
        getVideos().then(([err,videos])=>{
            if(err) return SetError(err)
            setArrVideo(videos)
            console.log(videos)
        });
    },[]);

    if(error) return(
        <span>{error}</span>
    )

    return(

                arrVideos.map(video =>{
                    const {user:{avatar,username}} = video;
                    return (
                    <div key={video.id}>  <VideoPlayer  {...video} avatar={avatar} username ={username}/> </div>
                    )
                })
    )
}