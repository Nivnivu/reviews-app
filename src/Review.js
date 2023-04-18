import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]

  console.log(people.length)
  const nextPerson = () => {
    if (index < people.length -1){
      setIndex((index) => {
        let newIndex = index +1;
        return newIndex
      })
    }
  }

  const pervPerson = () => {
    if (index != 0) {
      setIndex((index) => {
        let newIndex = index -1;
        return newIndex
      })
    }
  }

  const randomPerson = () => {
    const random = Math.floor(Math.random() * people.length)
    random == index ? randomPerson() : console.log('success')
  }



  return <article className='review'>
  <div className="img-container">
    <img src={image} alt={name} className='person-img' />
    <span className='quote-icon'>
      <FaQuoteRight />
    </span>
  </div>
  <h4 className='author'>{name}</h4>
  <p className='job'>{job}</p>
  <p className='info'>{text}</p>
  <div className="button-container">
  <button onClick={pervPerson} className='prev-btn'><FaChevronLeft/></button>   
  <button onClick={nextPerson} className='next-btn'><FaChevronRight/></button>
  </div>
  <button onClick={randomPerson} className='random-btn'>Suprise me</button>
  </article>;
};

export default Review;
