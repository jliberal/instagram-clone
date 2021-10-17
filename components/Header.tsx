import Menu from '../components/Menu';
import Logo from '../components/Logo'
import Search from '../components/Search'

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <Logo />
        {/* middle */}
        <Search />
        {/* right */}
        <Menu/>
      </div>
    </div>
  )
}

export default Header
