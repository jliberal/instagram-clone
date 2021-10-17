import Image from "next/Image";
import instalogosm from '../public/assets/insta-logo-sm.png'
import instalogolg from '../public/assets/insta-logo-lg.png'

function Logo() {
  return (
    <div className="flex">
      <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
        <Image 
          src={instalogolg}
          layout="fill" 
          objectFit="contain"
        />
      </div>
      <div className="relative w-10 lg:hidden flex-shrink-0">
        <Image 
          src={instalogosm}
          layout="fill" 
          objectFit="contain"
        />
      </div>     
    </div>
  )
}

export default Logo
