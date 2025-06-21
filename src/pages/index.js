import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";



export default function Home() {
  const router = useRouter()

  return (
    <div className="h-[92vh] flex flex-col" >
      
      <main className="flex-grow flex flex-col items-center justify-center px-4
      
      ">
        <div className="w-2/4 text-center bg-(--color-one)
        border border-black p-8
        ">
          <h1 className="text-5xl font-bold text-black mb-4">
            Generate QR Codes quickly and easily
          </h1>
          <p className="text-lg text-black mb-6">
            Instantly turn URLs into downloadable QR codes — fast, simple, and ready to use.
          </p>
          <div className='p-2 bg-black text-white
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
