import { useEffect, useState } from "react";
import QRCode from "qrcode";

function QRCodeImage({ url, label }) {
  const [src, setSrc] = useState("");
  const [message, setMessage] = useState(""); // state for feedback message

  useEffect(() => {
    QRCode.toDataURL(url)
      .then(setSrc)
      .catch(console.error);
  }, [url]);

  const handleDownload = () => {
    if (!src) return;

    // trigger download
    const link = document.createElement("a");
    link.href = src;
    link.download = `${label}.png`;
    link.click();

    // show feedback message
    setMessage("Downloaded!");
    // hide after 1.5 seconds
    setTimeout(() => setMessage(""), 1500);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <p>{label}</p>
      {src && <img src={src} alt={`QR code for ${label}`} />}
      <br />
      <button onClick={handleDownload}>Download</button>
      {message && <span style={{ marginLeft: "10px", color: "green" }}>{message}</span>}
    </div>
  );
}

export default QRCodeImage;
