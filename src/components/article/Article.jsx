import React from 'react'
import './article.css'

const Article = () => {
  return (
    <div className='sepp__blog-container_article'>
      <div className='sepp__blog-contaner_article-image'>
        <img src={imageUrl} alt=' blogImage' />
      </div>
    </div>
  )
}

export default Article
