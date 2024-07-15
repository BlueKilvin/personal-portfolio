interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Star Rail Station',
    description: `A fan-made companion website and database hosting multiple utility apps and tools, created for Honkai Star Rail.
    Used by thousands of players daily.`,
    imgSrc: '/static/images/StarRail.png',
    href: 'https://starrailstation.com/en',
  },
  {
    title: '3D Reconstruction of the Moon in VR',
    description: `A 3D photorealistic reconstruction of the moon with VR capabilities, created for my final year university project. 
    Programmed in JavaScript with WebGL and WebXR.`,
    imgSrc: '/static/images/Moon.png',
    href: 'https://github.com/BlueKilvin/VR-3D-Reconstruction',
  },
  {
    title: 'Programmable 16-bit Computer',
    description: `A program to be installed on my 16-bit computer's EPROM, to allow for simple C++ code executions. 
    Written for an Arduino with C++.`,
    imgSrc: '/static/images/16bit-computer.png',
    href: 'https://github.com/BlueKilvin/16bit-Arduino-Programmer',
  },
  {
    title: 'Gacha Analytics Software',
    description: `A set of probability distribution analytics and modeling programs, compatible with multiple games.
    Written completely in Python.`,
    imgSrc: '/static/images/Gacha-analytics.png',
    href: 'https://github.com/BlueKilvin/Gacha-Analytics',
  },
]

export default projectsData
