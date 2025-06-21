import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";



export default function Home() {
  const router = useRouter()

  return (
    <div className="h-[92vh] flex flex-col" >
      
      <main className="flex-grow flex flex-col items-center justify-center px-4
      
      ">
        <div className=" text-center bg-(--color-one)
        border border-black  flex flex-col
        py-8
        px-4
        sm:px-4
        md:px-12
        lg:px-12
        xl:px-12
        

        h-5/6
        sm:h-5/6
        md:h-1/2
        lg:h-1/2
        xl:h-1/2

        w-full
        sm:w-5/6
        md:w-5/6
        lg:w-2/4
        xl:w-2/4
        ">

          <h1 className="text-5xl font-bold text-black mb-4">
            Generate QR Codes quickly and easily
          </h1>
          <p className="text-lg text-black mb-6">
            Instantly turn URLs into downloadable QR codes — fast, simple, and ready to use.
          </p>

          <div className='p-2 mt-auto bg-black text-white
          cursor-pointer'
          onClick={() => {router.push('/dashboard')}}
          >
            Get Started
          </div>
        </div>
      </main>
    </div>
  );
}
