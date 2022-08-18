import React, { useState, useContext, createContext } from 'react'

const AppContext = createContext()
const AppProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false)
  const [indexSlide, setIndexSlide] = useState(0)
  const [index, setIndex] = useState(0)
  const [indexTestimonial, setIndexTestimonial] = useState(0)

  const openNav = () => {
    setShowNav(true)
  }
  const closeNav = () => {
    setShowNav(false)
  }
  const [slide, setSlide] = useState([
    {
      id: 1,
      image: './images/banner-1.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
    {
      id: 2,
      image: './images/banner-2.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
    {
      id: 3,
      image: './images/tenu3 1.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
    {
      id: 4,
      image: './images/slide-1 1.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
    {
      id: 5,
      image: './images/tenu5 1.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
    {
      id: 6,
      image: './images/blouse1 1.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
    {
      id: 7,
      image: './images/blouse2 1.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
    {
      id: 8,
      image: './images/blouse3 1.png',
      name: 'boubou africain,couple',
      title:
        "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
    },
  ])
  const [boutique, setBoutique] = useState([
    {
      id: '1',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/437e814bc38ad243934c3b3d1bd6c904/b499704d',
        'https://dl.airtable.com/.attachmentThumbnails/c8df37be92977d2946dbae7296be9b8c/7c0475ea',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 101,
    },
    {
      id: '2',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/9d53f195ca33a52dd9bd0a4980194177/5e7be93a',
        'https://dl.airtable.com/.attachmentThumbnails/14f1d274c5931ad4e71645eaad604cbc/75851b82',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 501,
    },
    {
      id: '3',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/b0993bd38d94fcaa7d0c573519330415/10a514ab',
        'https://dl.airtable.com/.attachmentThumbnails/7dd7df427531b4a7bbc37e64dc9f6809/6bd7aa77',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '4',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/d66dd36f5e8cfb694baf4b9933bbe6c5/ac44bd10',
        'https://dl.airtable.com/.attachmentThumbnails/b70d000816288e309f2c20e60d299a32/42e9201e',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '5',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/af3e0e742b2409bd34ba54e69d770da1/698ecb53',
        'https://dl.airtable.com/.attachmentThumbnails/a81f17b05efcacd38ca25e0454c768bf/068cb970',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '6',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/2e495042600689782c2bf6666de3fd84/b6b95cdd',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '7',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/74374b26c757a9c55f8dbc81719f705a/31c4fe0d',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '8',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/ce91e8c4c772153b23191140c3606b61/b76e08f3',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '9',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/6d277a46dabff9d8badb0149ad1e1663/01326665',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '10',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/61890acd3c380a259ea7deba4e921490/92974eed',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '11',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/9b372f1a1718b17c24b6170521d0751a/a5772603',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '12',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/ba8fa5039acab0faee05e20960e64bf3/2a13ce42',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '13',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/4c1801908e906d7a269063070ca7533f/e3ecccc2',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '14',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/7fb03c0626ecdf552ca8463b426c5fa2/8b7be3af',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
    {
      id: '15',
      name: 'boubou tradionnel',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/611547d368380c1625951acb8afc19b1/7df4c449',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    },
  ])
  const [tenu, setTenu] = useState([
    {
      id: 1,
      image:
        'https://i.pinimg.com/564x/7a/18/7c/7a187c54ff81a5ac0d8db36751a0796e.jpg',
      name: 'maria ferguson',

      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/8e/5d/3d/8e5d3ddd5b986356d274cf9df0bd2a61.jpg',
      name: 'john doe',

      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/87/00/a8/8700a84f1499e3a6d32f564a538040eb.jpg',
      name: 'john doe',

      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 4,
      image:
        'https://i.pinimg.com/564x/a9/8b/5e/a98b5ed97a0b2c0b3a746068238ad752.jpg',
      name: 'john doe',

      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 5,
      image:
        'https://i.pinimg.com/564x/a9/8b/5e/a98b5ed97a0b2c0b3a746068238ad752.jpg',
      name: 'john doe',

      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 6,
      image:
        'https://img.staticdj.com/bd8a3e316d8829abce4a008a6a7d0a4d_1080x.jpeg',
      name: 'john doe',

      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
  ])
  const [testimonial, setTestimonial] = useState([
    {
      id: 1,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      name: 'maria ferguson',
      title: 'office manager',
      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      name: 'john doe',
      title: 'regular guy',
      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
      name: 'peter smith',
      title: 'product designer',
      quote:
        'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      name: 'susan andersen',
      title: 'the boss',
      quote:
        'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
  ])
  return (
    <AppContext.Provider
      value={{
        setShowNav,
        showNav,
        openNav,
        closeNav,
        slide,
        setSlide,
        indexSlide,
        setIndexSlide,
        boutique,
        setBoutique,
        index,
        setIndex,
        testimonial,
        setTestimonial,
        tenu,
        setTenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
