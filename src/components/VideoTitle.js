import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-8 md:px-16 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-md py-2 w-2/12 md:w-3/12 md:text-5xl font-bold">{title}</h1>
        <p className="hidden w-2/5 py-2 text-sm md:text-xl md:inline-block">{overview}</p>
        <div className="py-2">
            <button className="text-xs px-1 py-1 rounded-sm md:text-2xl md:px-6 md:py-2 bg-white text-black bg-opacity-90 md:rounded-lg hover:bg-opacity-100">▶️ Play</button>
            <button className="hidden text-xs px-1 py-1 rounded-sm md:text-2xl md:px-6 md:py-2 md:mx-3 md:inline-block bg-gray-800 text-white bg-opacity-70 md:rounded-lg hover:bg-opacity-90">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;