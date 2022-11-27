import Navbar from "./navbar"
import Tickers from "./tickers"

const Layout = ({ children }) => {
  return (
    <div>
      <Tickers />
      <Navbar />
      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default Layout