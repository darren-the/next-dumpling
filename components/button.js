const Button = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="h-[52px] relative">
        <div className="round-button br border-[3px] border-solid border-black"></div>
        <div className="round-button tl bg-black centering prim-trans hover:translate-x-[6px] hover:translate-y-[6px]">
          <p className="text-white font-jakarta-bold text-sm">Subscribe</p>
        </div>
      </div>
      
    </a>
  )
}

export default Button