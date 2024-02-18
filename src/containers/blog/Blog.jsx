import React from 'react'
import './blog.css'
import Article from '../../components/article/Article.jsx'

const Blog = () => {
  return (
    <div className='sepp__blog section__padding' id='blog'>
      <div className='sepp__blog-heading'>
        <h1 className='gradient__text'>Explore Our Blog</h1>
        <div className='sepp__blog-container'>
          <div className='sepp__container_groupA'>
            <Article />
          </div>
          <div className='sepp__container_groupB'>
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
