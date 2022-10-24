import NavbarDesktop from "./navbar-desktop"
import Tickers from "./tickers"

const Layout = ({ children }) => {
  return (
    <div>
      <Tickers />
      <NavbarDesktop />
      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default Layout