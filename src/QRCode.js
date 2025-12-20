import { useEffect, useState } from "react";
import QRCode from "qrcode";

function QRCodeImage({ url, label }) {
  const [src, setSrc] = useState("");
  const [message, setMessage] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false); // state for fullscreen

  useEffect(() => {
    QRCode.toDataURL(url)
      .then(setSrc)
      .catch(console.error);
  }, [url]);

  const handleDownload = () => {
    if (!src) return;
    const link = document.createElement("a");
    link.href = src;
    link.download = `${label}.png`;
    link.click();

    setMessage("Downloaded!");
    setTimeout(() => setMessage(""), 1500);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <p>{label}</p>
      {src && (
        <img
          src={src}
          alt={`QR code for ${label}`}
          style={{ cursor: "pointer", maxWidth: "200px" }}
          onClick={openFullscreen}
        />
      )}
      <br />
      <button onClick={handleDownload}>Download</button>
      {message && <span style={{ marginLeft: "10px", color: "green" }}>{message}</span>}

      {isFullscreen && (
        <div
          onClick={closeFullscreen}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <img
            src={src}
            alt={`QR code for ${label}`}
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </div>
  );
}

export default QRCodeImage;
