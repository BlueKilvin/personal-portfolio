import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import React from 'react'
import { Butterfly_Kids } from 'next/font/google'
import Button from '@/components/Button'

const Home = () => {
  return (
    <div className="mt-32 flex items-center justify-center">
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="font-mono text-xl text-purple-500">Hello, my name is</h1>
          <h2 className="text-6xl font-bold">Mohammad Seifanvari</h2>
          <h3 className="text-5xl font-bold text-gray-400">I'm a full-stack software engineer</h3>
          <p className="max-w-md pt-7 text-lg text-gray-400">
            Designing and building infrastuctures and user experiences alike. 
            I've been traveling and upskilling for the past year and now I'm looking for new opportunities.
          </p>
        </div>

        <div className="flex flex-row space-x-5">
          <Button href="/about">Learn More About Me</Button>
          <Button href="/projects">See Some Of My Work</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
