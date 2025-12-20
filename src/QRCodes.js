import QRCodeImage from "./QRCode";

const baseUrl = "https://lscheinhorn.github.io/mozel-tov-oren/#";

function QRCodes() {
  return (
    <div>
      <h1>QR Codes</h1>

      <QRCodeImage
        label="Red"
        url={`${baseUrl}/red`}
      />

      <QRCodeImage
        label="Bull"
        url={`${baseUrl}/bull`}
      />

      <QRCodeImage
        label="Gives"
        url={`${baseUrl}/gives`}
      />

      <QRCodeImage
        label="You"
        url={`${baseUrl}/you`}
      />

      <QRCodeImage
        label="Wings"
        url={`${baseUrl}/wings`}
      />

      <QRCodeImage
        label="Gift"
        url={`${baseUrl}/gift`}
      />
    </div>
  );
}

export default QRCodes;
