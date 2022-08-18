import React from 'react'

export default function Contact() {
  return (
    <section className='section-center'>
      <div className='boutique-banner'>
        <div className='boutique-banner-container'>
          <article className='a-banner'>
            <div className='a-banner-info'>
              <h3>
                dieuf dieul <span>couture</span>
              </h3>
              <p>la qualité fait la différence</p>
            </div>
            <div className='a-img-banner'>
              <img src='images/pacob1.png' alt='' />
            </div>
          </article>
          <article className='b-banner'>
            <div className='b-banner-info'>
              <h3>nous livrons partout dans le monde</h3>
            </div>
          </article>
        </div>
      </div>
      <div className='contact-center'>
        <div className='contact-title'>
          <h3>
            Contactez nous pour en savoir plus sur nos offres et savoir comment
            on peut vous aider!
          </h3>
        </div>
        <div className='contact-container'>
          <article className='contact-info'>
            <h3>contacts</h3>

            <h5>(+221)784637952</h5>

            <h5>(+221)762555488</h5>

            <h5>email:dieufdieulentreprise@gmail.com</h5>

            <h3>Emplacements</h3>

            <h5>tivaoune peulh cite safco</h5>

            <h3>Heures d'ouverture</h3>

            <h5>Du Lundi au Samedi 10h à 22h</h5>
          </article>
          <article className='contact-form'>
            <form className='form'>
              <input type='text' placeholder='nom' className='input-form' />
              <input type='email' placeholder='email' className='input-form' />
              <textarea
                name=''
                id=''
                className='input-form'
                placeholder='votre message'
                cols='30'
                rows='10'
              ></textarea>
              <button className='input-form btn-contact'>envoyer</button>
            </form>
          </article>
        </div>
      </div>
    </section>
  )
}
