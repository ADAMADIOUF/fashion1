import React, { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
export default function SingleBoutique() {
  const imgDiv = useRef(null)
  const { id } = useParams()
  const { boutique, index, setIndex } = useGlobalContext()
  const products = boutique.filter((product, index) => {
    return product.id === id
  })
  console.log(products)

  const handleMouse = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }

  return (
    <>
      <div className='boutique-banner'>
        <div className='boutique-banner-container'></div>
      </div>

      <div className=' section-center single-boutique'>
        <div className='container-single'>
          {products.map((product) => {
            const { images, name, price, content } = product
            return (
              <>
                <article className='single-details'>
                  <div
                    className='big-img'
                    onMouseMove={handleMouse}
                    style={{ backgroundImage: `url(${images[index]})` }}
                    ref={imgDiv}
                    onMouseLeave={() =>
                      (imgDiv.current.style.backgroundPosition = `center`)
                    }
                  ></div>
                  <div className='small-img'>
                    {product.images.map((img, index) => {
                      return (
                        <div className='img-small' key={index}>
                          <img
                            src={img}
                            alt=''
                            onClick={() => setIndex(index)}
                          />
                        </div>
                      )
                    })}
                  </div>
                </article>
                <article className='single-info'>
                  <h3>{name}</h3>
                  <h4>{price}</h4>
                  <p>{content}</p>
                  {product.colors.map((color, index) => {
                    return (
                      <button
                        className='colors'
                        key={index}
                        style={{ background: color }}
                      ></button>
                    )
                  })}
                </article>
              </>
            )
          })}
        </div>
      </div>
      <div className='retour-b'>
        <Link to={`/boutique`}>
          <button className='back-boutique'>retour a la boutique</button>
        </Link>
      </div>
    </>
  )
}
