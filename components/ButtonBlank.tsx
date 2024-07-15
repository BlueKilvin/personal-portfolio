import Link from './Link'

const ButtonBlank = ({ children, href }) => {
  return (
    <div>
      <button className="rounded border border-purple-700 bg-transparent px-4 py-2 font-semibold text-purple-700 hover:border-transparent hover:bg-purple-500 hover:text-white">
        <Link href={href} target="_blank">
          {children}
        </Link>
      </button>
    </div>
  )
}

export default ButtonBlank
