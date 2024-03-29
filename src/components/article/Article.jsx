import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='sepp__blog-container_article'>
      <div className='sepp__blog-container_article-image'>
        <img src={imgUrl} alt=' blogImage' />
      </div>
      <div className='sepp__blog-container_article-content'>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
