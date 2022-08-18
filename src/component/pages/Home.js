import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from "../../Slider"
import Testimonial from './Testimonial';


export default function Home() {
  return (
    <>
      <div>
        <Slider />

        <section className='section-center homepage'>
          <div className='home-page-details'>
            <div className='container-home-page'>
              <article className='home-page-info img-1'>
                <img src='/images/b1 1.png' alt='' />
                <div className='home-page-info-2'>
                  {/* <div className='contact-home'>
                    <h3>
                      {' '}
                      <span>(+221)</span> 78-463-79-52
                    </h3>
                    <h3>
                      {' '}
                      <span>(+221)</span> 76-255-54-88
                    </h3>
                  </div> */}
                  <Link to={`/tenu`}>
                    <button className='slide-buy btn-buy'>acheter ici|</button>
                  </Link>
                  <h3 className='name-product'>tenue de sport</h3>
                </div>
              </article>

              <article className='home-page-info img-2'>
                <img src='/images/b2 1.png' alt='' />
                <div className='home-page-info-2'>
                  {/* <div className='contact-home'>
                    <h3>
                      {' '}
                      <span>(+221)</span> 78-463-79-52
                    </h3>
                    <h3>
                      {' '}
                      <span>(+221)</span> 76-255-54-88
                    </h3>
                  </div> */}
                  <Link to={`/tenu`}>
                    <button className='slide-buy'>acheter ici|</button>
                  </Link>
                  <h3 className='name-product'>tenue de travail</h3>
                </div>
              </article>
              <article className='home-page-info img-3'>
                <img src='/images/b3 1.png' alt='' />
                <div className='home-page-info-2'>
                  {/* <div className='contact-home'>
                    <h3>
                      {' '}
                      <span>(+221)</span> 78-463-79-52
                    </h3>
                    <h3>
                      {' '}
                      <span>(+221)</span> 76-255-54-88
                    </h3>
                  </div> */}
                  <Link to={`/boutique`}>
                    <button className='slide-buy'>acheter ici|</button>
                  </Link>
                  <h3 className='name-product'>boubou traditionnel</h3>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <section className='section-center'>
        <div className='arrivage'>
          <div className='title-arrivage'>
            <h3>nouvelle arrivage</h3>
          </div>
          <div className='container-home'>
            <article className='home-details'>
              <img src='/images/homme1 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/homme2 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/homme3 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/homme4 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/homme5 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/home6 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/home7 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/home8 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/home9 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
            <article className='home-details'>
              <img src='/images/home10 1.png' alt='' />
              <div className='home-btn'>
                <button className='btn-home'>
                  acheter
                  <a href=' https://wa.me/221784637952'>
                    <FaWhatsapp />
                  </a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className='section-center beauty-details'>
        <div className='container-beauty'>
          <article className='beauty-info beauty-1'>
            <div className='beauty-img'>
              <img src='/images/mariage.jpg' alt='' />
            </div>
            <div className='beauty-para'>
              <h3>marriage</h3>
              <p>vous serez satisfaite ou rembourse</p>
            </div>
          </article>
          <article className='beauty-info beauty-2'>
            <div className='beauty-img'>
              <img src='/images/baptem.jpg' alt='' />
            </div>
            <div className='beauty-para'>
              <h3>baptem</h3>
              <p>vous serez satisfaite ou rembourse</p>
            </div>
          </article>
          <article className='beauty-info beauty-3'>
            <div className='beauty-img'>
              <img src='/images/africaine.webp' alt='' />
            </div>
            <div className='beauty-para'>
              <h3>mode</h3>
              <p>vous serez satisfaite ou rembourse</p>
            </div>
          </article>
          <article className='beauty-info beauty-4'>
            <div className='beauty-img'>
              <img src='/images/africaine1.jpg' alt='' />
            </div>
            <div className='beauty-para'>
              <h3>ceremony familial</h3>
              <p>vous serez satisfaite ou rembourse</p>
            </div>
          </article>
          <article className='beauty-info beauty-5'>
            <div className='beauty-img'>
              <img src='/images/africaine2.webp' alt='' />
            </div>
            <div className='beauty-para'>
              <h3>mode</h3>
              <p>vous serez satisfaite ou rembourse</p>
            </div>
          </article>
        </div>
      </section>
      <section className='testimonial'>
        <Testimonial />
      </section>
      <section className='section-center last-banner'>
        <img src='/images/banner1.jpg' alt='' className='img-last' />
        <div className='chat-box-1'>
          <button>
            <a href=' https://wa.me/221784637952'>
              <FaWhatsapp />
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
