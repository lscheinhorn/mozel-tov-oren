function Gift() {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Gift</h1>
      <iframe
        src="https://giphy.com/embed/l0MYt5jPR6QX5pnqM"
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

export default Gift;
