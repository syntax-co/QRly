import { useState, useRef} from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QrCode from "@/components/qr-code/qr-code";




export default function QRDashboard() {
  const [url, setUrl] = useState("http://example.com");
  const qrRef = useRef(null);
  const qrCode = useRef(null);
  
  const handleDownload = () => {

    qrCode.current.download({name:'qr-code',extension:'png'})
  }


  return (
    <div className="h-[92vh]
    flex items-center justify-center
    ">
      <div className="flex flex-col h-4/6
      
      w-5/6
      sm:w-5/6
      md:w-1/2
      lg:w-1/2
      xl:w-1/2
      
      ">

        <div className='h-fit
        bg-(--color-one) border border-black mb-2 p-2
        '
        >
          <h1 className="text-3xl font-bold text-black">QR Code Generator</h1>
        </div>
        
        <div className='flex-1 flex '
        >


          {/* Right Panel */}
          <div className="w-full p-12 flex flex-col items-center justify-center
          bg-(--color-one) border border-black
          ">

            <div className='w-fit h-full flex flex-col'
            >
              <div className='w-[200px] aspect-square'
              >
                <QrCode 
                qrRef={qrRef}
                qrCode={qrCode}
                data={url}
                />
              </div>

              <div className='text-black my-3 mt-auto'
              >
                  <label htmlFor="url" className="block text-black mb-2">
                  Enter a URL:
                  </label>
                  <Input className='border-black outline-none'
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  
                  />
              </div>

              <div className='bg-black rounded-md p-2 
              flex items-center justify-center cursor-pointer
              '

              onClick={() => {handleDownload()}}
              >
                Download
              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  );
}
