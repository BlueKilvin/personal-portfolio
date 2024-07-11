import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import React from 'react'

const Home = () => {
  return (
    <div className='mt-32 flex justify-center items-center'>
      <div className='space-y-16'>

        <div className='space-y-2'>
          <h1 className='font-mono text-purple-500 text-xl'>Hello, my name is</h1>
          <h2 className='font-bold text-6xl'>Mohammad Seifanvari</h2>
          <h3 className='font-bold text-gray-400 text-5xl'>I'm a full-stack software engineer</h3>
          <p className='pt-7 max-w-md text-gray-400 text-lg'>
            Designing and building infrastuctures and user experiences alike.
            I've been traveling and upskilling for the past year and now I'm looking for new opportunities.
          </p>
        </div>

        <div>
          <button>Learn More about Me</button>
          <button>See Some of My Work</button>
        </div>

      </div>
    </div>
  )
}

export default Home
