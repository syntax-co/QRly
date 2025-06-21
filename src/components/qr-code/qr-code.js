

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export default function QrCode({qrCode,qrRef, data }) {
  

  useEffect(() => {
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling({
        width: 200,
        height: 200,
        data: data,
        image: "",
        dotsOptions: {
          color: "#000",
          type: "extra-rounded"
        },
        backgroundOptions: {
          color: "#FFD166"
        },
      });
    }

    qrCode.current.update({ data });

    if (qrRef.current) {
      qrRef.current.innerHTML = "";
      qrCode.current.append(qrRef.current);
    }
  }, [data]);

  return <div ref={qrRef} />;
}
