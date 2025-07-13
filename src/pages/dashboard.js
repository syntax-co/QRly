import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QrCode from "@/components/qr-code/qr-code";
import { FaEye,FaEyeSlash } from "react-icons/fa";

export default function QRDashboard() {
  const [url, setUrl] = useState("http://example.com");
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#2E2E3A");
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [displayBackground,setDisplayBackground] = useState(false)

  const qrRef = useRef(null);
  const qrCode = useRef(null);

  const handleFinalDownload = (withBg) => {
    qrCode.current.download({
      name: "qr-code",
      extension: "png",
      background: withBg ? bgColor : "transparent",
      color: qrColor,
    });
    setShowDownloadModal(false);
  };

  return (
    <div className="h-[92vh] flex items-center justify-center relative">
      <div className="flex flex-col h-4/6 w-5/6 sm:w-5/6 md:w-1/2 lg:w-1/2 xl:w-1/2 relative z-10">
        <div
          className="h-fit border border-black mb-2 p-2"
          style={{ backgroundColor: "var(--color-one)" }}
        >
          <h1 className="text-3xl font-bold text-black">QR Code Generator</h1>
        </div>

        <div className="flex-1 flex">
          <div
            className="w-full p-12 flex flex-col items-center justify-center border border-black relative"
            style={{ backgroundColor: "var(--color-one)" }}
          >
            <div className="w-fit h-full flex flex-col">
              <div className="w-fit aspect-square border border-background
              overflow-hidden mx-auto
              flex items-center justify-center rounded-lg">
              
                <QrCode
                  qrRef={qrRef}
                  qrCode={qrCode}
                  data={url}
                  qrColor={qrColor}
                  backgroundColor={bgColor}
                  displayBackground={displayBackground}
                />
              </div>

              {/* URL Input */}
              <div className="text-black my-3">
                <label htmlFor="url" className="block text-black mb-1">
                  Enter a URL:
                </label>
                <Input
                  className="border-black outline-none"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                />
              </div>

              {/* Color Pickers */}
              <div className="text-black mb-4">
                <div className="mb-2 flex">
                  <label className="block text-black mb-1 mr-auto">
                  Color
                  </label>
                  <input className="w-16"
                    type="color"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                  />
                </div>


                <div className="flex"
                >
                  <label className="block text-black mb-1 mr-auto">
                    Background
                  </label>
                  
                  <input className="w-16"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                  />
                </div>
              </div>

              <div className="border border-background rounded-md p-1 text-background
              flex justify-center my-2 cursor-pointer"
              onClick={() => {setDisplayBackground(!displayBackground)}}
              >
                {
                  displayBackground? 'Hide Background':'Show Background'
                }
              </div>
              

              {/* Download Button */}
              <div
                className="bg-black text-white rounded-md p-2 flex items-center justify-center cursor-pointer"
                onClick={() => setShowDownloadModal(true)}
              >
                Download
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20">
          <div className="bg-white rounded-md p-6 w-80 border border-black shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-black">Download Options</h2>
            <p className="mb-4 text-black">Would you like to include the background color?</p>

            <div className="flex flex-col space-y-3">
              <Button onClick={() => handleFinalDownload(true)}>
                Download with Background
              </Button>
              <Button onClick={() => handleFinalDownload(false)} variant="outline">
                Download without Background
              </Button>
              <Button
                onClick={() => setShowDownloadModal(false)}
                variant="ghost"
                className="text-red-500"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
