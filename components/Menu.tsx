import { HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon } from "@heroicons/react/outline";
import { HomeIcon} from "@heroicons/react/solid";
import imgJohn from "../public/assets/john-user.png"

function Menu() {
  return (
    <div className="flex items-center justify-end space-x-4">
      <HomeIcon className="navBtn"/>
      <div className="relative navBtn">
        <PaperAirplaneIcon className="rotate-45 "/>
        <div className="absolute -top-2 -right-1 text-sm w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
      </div>
      <PlusCircleIcon className="navBtn"/>
      <UserGroupIcon className="navBtn"/>
      <HeartIcon className="navBtn"/>
      
      <MenuIcon className="h-6 md:hidden cursor-pointer"/>

      <img src={imgJohn.src} alt="profile pic" className="h-10 w-10 cursor-pointe rounded-full" />
    </div>
  )
}

export default Menu
