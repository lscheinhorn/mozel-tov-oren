import vars from '../vars.js';  

const vidUrl = `https://www.youtube.com/embed/5Ys-oX5vZog`
const origin = vars.origin
const srcUrl = `${vidUrl}?origin=${origin}`

function Red() {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Red</h1>
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

export default Red;
