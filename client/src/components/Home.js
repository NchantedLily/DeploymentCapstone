var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Video</title>
        <link rel="stylesheet" href="home.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <section className="showcase">
          <video src="img/Bluewall2.mp4" muted loop autoPlay />
          <div className="overlay">
            <div className="text">
              <h1>Cincinnati</h1>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src="/img/blink1.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Events</h5>
                  <p className="card-text">Cincinnati has a lot of events, year round. From Spring to Winter there's always something to do or see.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src="/img/16bit.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Food/Bars</h5>
                  <p className="card-text">Food is not hard to find, many different cultures and price points to explore. </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src="/img/Aquarium.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Attractions</h5>
                  <p className="card-text">Beautiful places to see, doesn't matter if you're on a date or with family.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src="/img/ut.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Historical</h5>
                  <p className="card-text">Learn more about what made Cincinnati what it is today.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src="./img/cincy2.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text">Check out or contact page on how to reach us or where to start when exploring the city.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src="/img/pontiac.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Breweries</h5>
                  <p className="card-text">Like to drink, or looking for a place to kickback and relax. There's plenty of breweries in Cincy.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              {/* MAP */}
              <div className="Map">
                <iframe src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" allow="geolocation" width="100%" height="400px" frameBorder={0} scrolling="no" allowFullScreen />
              </div>
            </div>
          </div></section>
      </div>
    );
  }
});
