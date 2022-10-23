const Button = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="h-[52px] relative">
        <div className="round-button right-0 bottom-0 border-[3px] border-solid border-black"></div>
        <div className="round-button left-0 top-0 bg-black flex justify-center items-center 
          transition duration-300 hover:translate-x-[6px] hover:translate-y-[6px]">
          <p className="text-white font-jakarta-bold text-sm">Subscribe</p>
        </div>
      </div>
      
    </a>
  )
}

export default Button