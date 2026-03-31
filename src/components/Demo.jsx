import React from 'react'

const Demo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-4 rounded-2xl shadow-xl">

        <h1 className="text-xl font-semibold mb-3 text-center">
          Demo
        </h1>

        <video
          className="w-[900px] max-w-full rounded-xl"
          src='vedio.mp4'
          controls
          autoPlay
          muted
          loop
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

    </div>
  )
}

export default Demo