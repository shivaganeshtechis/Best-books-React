import React from 'react'

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e.target)
    alert('hello');
  };
  return (
    <article className="Book" onMouseOver={() => {
      console.log(title) 
    }}>
      <img src = {img}  alt="" />
      <h3 onClick={() => console.log(title)}>{title}</h3>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>example</button>
    </article>
  );
}; 

export default Book
