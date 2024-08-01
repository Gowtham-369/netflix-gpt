import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-16 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
        <h1 className="py-2 text-5xl font-bold">{title}</h1>
        <p className="w-2/5 py-2 text-xl">{overview}</p>
        <div className="py-2">
            <button className="text-2xl px-6 py-2 bg-white text-black bg-opacity-90 rounded-lg hover:bg-opacity-100">▶️ Play</button>
            <button className="text-2xl px-6 py-2 mx-3 bg-gray-800 text-white bg-opacity-70 rounded-lg hover:bg-opacity-90">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;