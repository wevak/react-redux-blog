import React from 'react'
import images from '../assets/images'
import Navbar from '../components/Navbar'
import Login from './Login'
import Signup from './Signup'

const LandingPage = () => {
  const textShadow = {
    textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
  }
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <div className="jumbotron jumbotron-fluid bg-white">
        <div className="d-flex flex-column align-items-center">
          <img src={images.logo} className="p-2" alt="Activello" />
          <p className="lead">Just another colorlib.com site</p>
        </div>
      </div>
      <section id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="./carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="./carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="./carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="./carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={images.girlBicycle} alt="Girl on Bicycle"/>
            <div className="carousel-caption d-none d-md-block" style={textShadow}>
              <h2>TEMPLATE</h2>
              <p>Template: Featured Image (No Sidebar Layout)</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={images.roofTop} alt="Rooftop"/>
            <div className="carousel-caption d-none d-md-block" style={textShadow}>
              <h2>TEMPLATE</h2>
              <p>
                Template: Featured Image (Full Width No Sidebar Layout)
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={images.tools} alt="Tools"/>
            <div className="carousel-caption d-none d-md-block" style={textShadow}>
              <h2>TEMPLATE</h2>
              <p>Template: More Tag</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={images.greenBush} alt="Green Bush" />
            <div className="carousel-caption d-none d-md-block" style={textShadow}>
              <h2>TEMPLATE</h2>
              <p>Template Excerpt(Defined)</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="./carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="./carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </section>
      <main className="d-flex flex-column flex-md-row container">
        <section className="col-md-8">
          <div className="card-deck flex-column">
            <div className="card text-center mb-3 border-0">
              <div className="card-header bg-white">POST FORMATS</div>
              <div className="card-body">
                <h5 className="card-title">Post Format: Standard</h5>
                <p className="card-text"><small className="text-muted">Posted on October 5, 2016 by Aigars</small></p>
              </div>
              <img className="card-img-bottom" src={images.girlHoldingCamera} alt="Girl holding camera" />
              <div className="card-body">
                <p className="card-text">
                  All children, except one, grow up. They soon know that they will grow up, and the way
                  Wendy knew was this.
                </p>
                <a href="./" className="font-weight-bold">| Read More |</a>
              </div>
            </div>
            <div className="card text-center mb-3 border-0">
              <div className="card-header bg-white">POST FORMATS</div>
              <div className="card-body">
                <h5 className="card-title">Post Format: Standard</h5>
                <p className="card-text"><small className="text-muted">Posted on October 5, 2016 by Aigars</small></p>
              </div>
              <img className="card-img-bottom" src={images.urban} alt="Building River Bridge" />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, sapien nec
                  aliquam viverra, libero elit euismod turpis, vel sollicitudin nisi eros eget tortor.
                </p>
                <a href="./" className="font-weight-bold">| Read More |</a>
              </div>
            </div>
          </div>
          <div className="card-deck">
            <div className="card text-center mb-3 border-0">
              <div className="card-header bg-white">TEMPLATE</div>
              <div className="card-body">
                <h5 className="card-title">Template: Featured Image (No Sidebar Layout)</h5>
                <p className="card-text"><small className="text-muted">Posted on November 11, 2015 by Aigars
                  </small></p>
              </div>
              <img className="card-img-bottom" src={images.girlBicycle330x220} alt="Card cap" />
              <div className="card-body text-left">
                <p className="card-text">
                  This post should display a featured image, if the theme supports it. Non-square images can provide some
                  unique styling issues. This post tests a vertical featured image.
                </p>
              </div>
            </div>
            <div className="card text-center mb-3 border-0">
              <div className="card-header bg-white">TEMPLATE</div>
              <div className="card-body">
                <h5 className="card-title">Template: Featured Image (Full Width No Sidebar Layout)</h5>
                <p className="card-text"><small className="text-muted">Posted on November 1, 2015 by Aigars</small></p>
              </div>
              <img className="card-img-bottom" src={images.roofTop330x220} alt="Rooftop" />
              <div className="card-body text-left">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="w-100 d-none d-sm-block"></div>
            <div className="card text-center mb-3 border-0">
              <div className="card-header bg-white">TEMPLATE</div>
              <div className="card-body">
                <h5 className="card-title">Template: More Tag</h5>
                <p className="card-text"><small className="text-muted">Posted on November 1, 2015 by Aigars</small></p>
              </div>
              <img className="card-img-bottom" src={images.tools330x220} alt="Ustra"/>
              <div className="card-body text-left">
                <p className="card-text">
                  This content is before the more tag. Right after this sentence should be a “continue reading” button of
                  some sort.
                </p>
              </div>
            </div>
            <div className="card text-center mb-3 border-0">
              <div className="card-header bg-white">TEMPLATE</div>
              <div className="card-body">
                <h5 className="card-title">Template: Excerpt (Defined)</h5>
                <p className="card-text"><small className="text-muted">Posted on November 1, 2015 by Aigars</small></p>
              </div>
              <img className="card-img-bottom" src={images.greenBush330x220} alt="bush"/>
              <div className="card-body text-left">
                <p className="card-text">
                  This is a user-defined post excerpt. It should be displayed in place of the post content in
                  archive-index pages.
                </p>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-md-4">
          <div className="card mb-3 border-0">
            <div className="card-header bg-white">ABOUT ME</div>
            <img className="card-img-top" src={images.girlHoldingCamera} alt="Girl Holding Camera"/>
            <div className="card-body">
              <p className="card-text">
                This is a user-defined post excerpt. It should be displayed in place of the post content in archive-index
                pages.
              </p>
            </div>
          </div>
          <div className="card mb-3 border-0">
            <div className="card-header bg-white">FOLLOW ME</div>
            <div className="card-body">
              <ul className="d-flex justify-content-center list-inline" style={{fontSize: 30}}>
                <li>
                  <a href="./" title="Facebook">
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="Twitter">
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="YouTube">
                    <i className="lab la-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="Instagram">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="GitHub">
                    <i className="lab la-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card mb-3 border-0">
            <div className="card-header bg-white">RECENT POSTS</div>
            <div className="d-flex">
              <div className="mr-2" style={{width: "8rem"}}>
                <img className="img-fluid img-thumbnail border-0" src={images.girlHoldingCamera150x150} alt="Girl Snapping"/>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div className="card-title">Post Format: Standard</div>
                <p className="card-text"><small className="text-muted"> - 05 Oct, 2016</small></p>
              </div>
            </div>
            <div className="d-flex">
              <div className="mr-2" style={{width: "8rem"}}>
                <a href="./post_gallery.html">
                  <img className="img-fluid img-thumbnail border-0" src={images.urban150x150} alt="River Bridge" />
                </a>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <a href="./post_gallery.html">
                  <div className="card-title">Post Format: Gallery</div>
                </a>
                <p className="card-text"><small className="text-muted"> - 12 Oct, 2016</small></p>
              </div>
            </div>
            <div className="d-flex">
              <div className="mr-2" style={{width: "8rem"}}>
                <img className="img-fluid img-thumbnail border-0" src={images.girlBicycle150x150} alt="Girl Carrying Bicycle" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div className="card-title">Post Format: Standard</div>
                <p className="card-text"><small className="text-muted"> - 05 Oct, 2016</small></p>
              </div>
            </div>
          </div>
          <div className="card mb-3 border-0">
            <div className="card-header bg-white">
              CATEGORIES
            </div>
            <ul className="list-group list-group-flush d-flex flex-row justify-content-between">
              <div>
                <li className="list-group-item">Post Formats</li>
                <li className="list-group-item">Template</li>
                <li className="list-group-item">Cat A</li>
                <li className="list-group-item">Edge Case</li>
                <li className="list-group-item">Cat A</li>
              </div>
              <div>
                <li className="list-group-item"><span className="badge badge-light">11</span></li>
                <li className="list-group-item"><span className="badge badge-light">5</span></li>
                <li className="list-group-item"><span className="badge badge-light">2</span></li>
                <li className="list-group-item"><span className="badge badge-light">3</span></li>
                <li className="list-group-item"><span className="badge badge-light">3</span></li>
              </div>
            </ul>
          </div>
          <div className="card mb-3 border-0">
            <div className="card-header bg-white">THIS THEME IS ADSENSE READY</div>
          </div>
        </aside>
      </main>
      <footer className="">
        <div className="jumbotron jumbotron-fluid mb-0">
          <div className="d-flex flex-column align-items-center">
              <ul className="d-flex justify-content-center list-inline" style={{fontSize: 30}}>
                <li>
                  <a href="./" title="Facebook">
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="Twitter">
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="YouTube">
                    <i className="lab la-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="Instagram">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="./" title="GitHub">
                    <i className="lab la-github"></i>
                  </a>
                </li>
              </ul>
            <p className="lead">Designed by @vivek</p>
          </div>
        </div>
      </footer>
      <Login />
      <Signup />
    </div>
  )
}
export default LandingPage;