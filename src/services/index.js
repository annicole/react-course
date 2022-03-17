import { createClient } from "@supabase/supabase-js";
import { supabase } from "./supabase";

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL;

export const getVideos = async () => {
  let { data, error } = await supabase.from("videos").select(` *,user:user_id(
        username,
        avatar,
        id
    )
  `).order('created_at',{ascending:false});
  console.log(error);
  return [error, data];
};

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID();

  const { data, error } = await supabase.storage
    .from("video")
    .upload(`uploads/${filename}.mp4`, videoFile);

  const file = data?.Key ? `${prefix}${data.Key}` : "";
  return [error, file];
};

export const publishVideo = async ({ videoSrc, description }) => {
  const albumCover = "assets/album.jpeg";
  const songTitle = "Spongebob Tomfoolery - Dante9k Remix'";
  const { data, error } = await supabase
    .from("videos")
    .insert([
      {
        user_id: "35817e0b-c8cb-49e4-b01e-07461bfe0aae",
        description,
        albumCover,
        songTitle,
        src:videoSrc
      },
    ]);

  return [error, data];
};
