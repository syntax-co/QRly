import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function QRDashboard() {
  const [url, setUrl] = useState("");
  const [qrSrc, setQrSrc] = useState(null);

  const generateQrCode = () => {
    if (!url) return;
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      url
    )}`;
    setQrSrc(apiUrl);
  };

  return (
    <div className="h-[92vh]
    flex items-center justify-center
    ">
      <div className="flex flex-col w-5/6 h-4/6">

        <h1 className="text-3xl font-bold text-black mb-6">QR Code Generator</h1>
        
        <div className='flex-1 flex '
        >

            {/* Left Panel */}
            <div className="w-1/3 p-6 flex flex-col justify-between
            bg-(--color-one) border border-black
            ">
            <div className='text-black'
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
            <Button onClick={generateQrCode} className="mt-4 text-white">
                Generate
            </Button>
            </div>

            {/* Right Panel */}
            <div className="flex-1 ml-3 p-6 flex flex-col items-center justify-center
            bg-(--color-one) border border-black
            ">
            {qrSrc ? (
                <>
                <img
                    src={qrSrc}
                    alt="Generated QR Code"
                    width={200}
                    height={200}
                    className="border border-black"
                />
                <a
                    href={qrSrc}
                    download="qr-code.png"
                    className="mt-4 text-sm text-[--color-four] underline"
                >
                    Download QR Code
                </a>
                </>
            ) : (
                <p className="text-black text-center">Your QR code preview will appear here after generation.</p>
            )}
            </div>

        </div>

      </div>
    </div>
  );
}
