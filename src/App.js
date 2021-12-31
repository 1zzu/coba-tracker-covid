import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Fragment } from 'react';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <div> */}
        {/* ======= Header ======= */}
        <header id="header" className="header fixed-top">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <p className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt />
              <span>Protect Care</span>
            </p>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Beranda</a></li>
                <li><a className="nav-link scrollto" href="#about">Vaksinasi</a></li>
                <li><a className="nav-link scrollto" href="#counts">Penyebaran</a></li>
                <li><a className="nav-link scrollto" href="#contact">kontak</a></li>
                <li><a className="getstarted scrollto" href="#about">Daftar</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Lawan covid-19 dengan vaksinasi</h1>
                <h4 data-aos="fade-up" data-aos-delay={400}>Bersama kita sukseskan vaksinasi covid-19 bagi semua kalangan</h4>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <div className="text-center text-lg-start">
                    <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
                {/* <img src="assets/img/hero-img.png" class="img-fluid" alt=""> */}
                <img src="https://sman3tamsel.sch.id/wp-content/uploads/2021/09/hero.png" className="img-fluid" alt />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row gx-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                  <div className="content">
                    <h2>Sudah vaksin? Cek disini</h2>
                    <div className="vaksin">
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">NIK</label>
                        <input type="text" name="name" className="form-control" placeholder="NIK disini ya" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nama Lengkap</label>
                        <input type="text" className="form-control" placeholder="Nama lengkapmu" />
                      </div>
                    </div>
                    {/* <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                  <p>
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                  </p> */}
                    <div className="text-center text-start">
                      <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Cek</span>
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                  <img src="assets/img/about.jpg" className="img-fluid" alt />
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Values Section ======= */}
          <section id="values" className="values">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Our Values</h2>
                <p>Odit est perspiciatis laborum et dicta</p>
              </header>
              <div className="row">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="box">
                    <img src="assets/img/values-1.png" className="img-fluid" alt />
                    <h3>Ad cupiditate sed est odio</h3>
                    <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={400}>
                  <div className="box">
                    <img src="assets/img/values-2.png" className="img-fluid" alt />
                    <h3>Voluptatem voluptatum alias</h3>
                    <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={600}>
                  <div className="box">
                    <img src="assets/img/values-3.png" className="img-fluid" alt />
                    <h3>Fugit cupiditate alias nobis.</h3>
                    <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Values Section */}
          {/* ======= Counts Section ======= */}
          <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Tracking</h2>
                <p>Penyebaran Covid-19</p>
              </header>
              <div className="row gy-3">
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile" />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}} />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-headset" style={{color: '#15be56'}} />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                      <p>Hours Of Support</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-people" style={{color: '#bb0852'}} />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                      <p>Hard Workers</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr /><br />
              <div className="row">
                <header className="section-header">
                  <h2>Negara</h2>
                </header>
                <div className="container">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Pilih negara</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
          </section>{/* End Counts Section */}
          {/* ======= F.A.Q Section ======= */}
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>F.A.Q</h2>
                <p>Frequently Asked Questions</p>
              </header>
              <div className="row">
                <div className="col-lg-6">
                  {/* F.A.Q List 1*/}
                  <div className="accordion accordion-flush" id="faqlist1">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                          Non consectetur a erat nam at lectus urna duis?
                        </button>
                      </h2>
                      <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                          Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                        </button>
                      </h2>
                      <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                        </button>
                      </h2>
                      <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* F.A.Q List 2*/}
                  <div className="accordion accordion-flush" id="faqlist2">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                          Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                        </button>
                      </h2>
                      <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                          Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                        </button>
                      </h2>
                      <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                          Varius vel pharetra vel turpis nunc eget lorem dolor?
                        </button>
                      </h2>
                      <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End F.A.Q Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Portfolio</h2>
                <p>Check our latest work</p>
              </header>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 1"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 2"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 2"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 2"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 3"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 1"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 3"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Portfolio Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </header>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-geo-alt" />
                        <h3>Address</h3>
                        <p>A108 Adam Street,<br />New York, NY 535022</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-telephone" />
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-envelope" />
                        <h3>Email Us</h3>
                        <p>info@example.com<br />contact@example.com</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-clock" />
                        <h3>Open Hours</h3>
                        <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-md-12">
                        <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                      </div>
                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h4>Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                </div>
                <div className="col-lg-6">
                  <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="index.html" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt />
                    <span>Protect Care</span>
                  </a>
                  <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">About us</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Services</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Terms of service</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Web Design</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Web Development</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022<br />
                    United States <br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Protect Care</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/Protect Care-bootstrap-startup-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>{/* End Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      {/* </div> */}

    </>
  );
}

export default App;


