import React from 'react'
import './article.css'

const Article = ({ imgUrl }) => {
  return (
    <div className='sepp__blog-container_article'>
      <div className='sepp__blog-container_article-image'>
        <img src={imgUrl} alt=' blogImage' />
      </div>
    </div>
  )
}

export default Article
