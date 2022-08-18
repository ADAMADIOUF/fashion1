import React from 'react'
import { useGlobalContext } from '../../context'
export default function Tenu() {
  const { tenu } = useGlobalContext()
  return (
    <section className='section-center tenu'>
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

      <div className='tenu-container-1'>
        {tenu.map((tenu) => {
          const { id, name, image } = tenu
          return (
            <div className='tenu-product' key={id}>
              <img src={image} alt='' className='img-tenu' />
              <div className='tenu-info'>
                <h3>{name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
