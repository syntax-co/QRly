import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export default function QrCode({ qrCode, qrRef, data, backgroundColor, qrColor, displayBackground }) {
  useEffect(() => {
    const margin = 10; // 👈 Adjust this value as needed for padding

    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling({
        width: 200,
        height: 200,
        data: data,
        image: "",
        margin: margin, // ✅ Add padding here
        dotsOptions: {
          color: qrColor,
          type: "extra-rounded"
        },
        backgroundOptions: {
          color: displayBackground?backgroundColor:'#ffffff00'
        },
      });
    }

    qrCode.current.update({
      data,
      margin: margin, // ✅ Also update margin here
      dotsOptions: { color: qrColor },
      backgroundOptions: { color: displayBackground?backgroundColor:'#ffffff00' }
    });

    if (qrRef.current) {
      qrRef.current.innerHTML = "";
      qrCode.current.append(qrRef.current);
    }
  }, [data, backgroundColor, qrColor,displayBackground]);

  return <div ref={qrRef} />;
}
