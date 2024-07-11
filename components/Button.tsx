import React, { Children } from 'react'
import Link from './Link'

const Button = ({title, href}) => {
  return (
    <div>
        <button><Link href={href}>{title}</Link></button>
    </div>
  )
}

export default Button
