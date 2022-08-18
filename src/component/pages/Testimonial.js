import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index';
import { Link } from 'react-router-dom';
import {
  FiChevronRight,
  FiChevronLeft,
  FiScissors,
  FiThumbsUp,
} from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import {useGlobalContext} from"../../context"
export default function Testimonial() {
  const { testimonial, indexTestimonial, setIndexTestimonial } =
    useGlobalContext();
 
  return (
    <section className='information'>
      <div className='information-container'>
        <article className='information-details'>
          <span>
            <FaShippingFast />
          </span>
          <div className='information-info-1'>
            <h3>free transportation</h3>
            <p>partout a dakar</p>
          </div>
        </article>
        <article className='information-details'>
          <span>
            <GiClothes />
          </span>
          <div className='information-info-1'>
            <h3>coffection tout sorte de boubou</h3>
            <p>partout a dakar</p>
          </div>
        </article>
        <article className='information-details'>
          <span>
            <FiScissors />
          </span>
          <div className='information-info-1'>
            <h3>nous coupons eact votre</h3>
            <p>partout a dakar</p>
          </div>
        </article>
        <article className='information-details'>
          <span>
            <FiThumbsUp />
          </span>
          <div className='information-info-1'>
            <h3>dieureudieuf</h3>
            <p>merci d'etre pasee</p>
          </div>
        </article>
      </div>
    </section>
  );
}
