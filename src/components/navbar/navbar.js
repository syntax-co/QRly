
import { Button } from "../ui/button";
import { useRouter } from "next/router";



const NavBar = () => {
    const router = useRouter()

    return (
      <header className="w-full px-6 py-4 flex justify-between items-center
      bg-(--color-one) border-b border-black
      h-[8vh]">
        <div className="">
          <div className='w-10 aspect-square bg-center bg-contain
          cursor-pointer'
          style={{
            backgroundImage:'url(./images/logo.png)'
          }}

          onClick={() => {router.push('/')}}
          />
        </div>
        <nav className="gap-6 items-center">
          
          <Button className=" text-white cursor-pointer"
          onClick={() => {router.push('/dashboard')}}
          >Get Started</Button>
        </nav>
      </header>
    )
}
 
export default NavBar;