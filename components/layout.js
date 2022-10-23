import NavbarDesktop from "./navbar-desktop"

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarDesktop />
      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default Layout