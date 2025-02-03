import React from 'react'
import { useLocation } from 'react-router-dom';

function SinglePage() {
    const location = useLocation();
	//get post data from MainPage
	const post = location.state?.post;
	console.log(post);
  return (
    <section className="post">
    <div className="container">
        <div className="single-post">
            <h1 className="post-title">{post.title}</h1>
            <img src={post.image} alt={post.title} className="post-image" />
            <p className="post-content">{post.content}</p>
        </div>
    </div>
</section>
  )
}

export default SinglePage