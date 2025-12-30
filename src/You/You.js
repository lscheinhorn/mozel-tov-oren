import vars from '../vars.js';  

const vidUrl = `https://www.youtube.com/embed/8fmeJXogN64?si=p6Eqv9J1Ia_zw9_e`
const origin = vars.origin
const srcUrl = `${vidUrl}?origin=${origin}`

function You() {
  return (
    <div>
      {/* <h1 style={{ color: 'red' }}>You</h1> */}
      <iframe
        src={srcUrl}
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        style={{ width: '100%', height: 'auto', minHeight: '270px' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Red Giphy"
      ></iframe>
    </div>
  );
}

export default You;
