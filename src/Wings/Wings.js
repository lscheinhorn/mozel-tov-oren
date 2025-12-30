import vars from '../vars.js';  


const vidUrl = `https://www.youtube.com/embed/AgnWUvnw6BY?si=zm0GrnGUheS3wvHy`
const origin = vars.origin
const srcUrl = `${vidUrl}?origin=${origin}`


function Wings() {
  return (
    <div>
      {/* <h1 style={{ color: 'red' }}>Wings</h1> */}
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
      <iframe width="686" height="1220" src="https://www.youtube.com/embed/KRG5gVNAL9w" title="December 28, 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}

export default Wings;
