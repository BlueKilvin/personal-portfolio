import Link from './Link'

const Button = ({ children, href}) => {
  return (
    <div>
        <button className="rounded bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent">
          <Link href={href}>{children}</Link>
        </button>
    </div>
  )
}

export default Button
