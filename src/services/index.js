import { createClient } from '@supabase/supabase-js'
import { supabase } from './supabase'

export const getVideos =async ()=>{
    let { data, error } = await supabase
  .from('videos')
  .select(` *,user:user_id(
        username,
        avatar,
        id
    )
  `)
  console.log(error)
  return [error,data]
}

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()

  const { data, error } = await supabase.storage
    .from('video')
    .upload(`uploads/${filename}.mp4`, videoFile)

  const file = data?.Key ? `${prefix}${data.Key}` : ''
  return [error, file]
}