import React from 'react';
import post from './Post.module.css'

const Post = (props) => {
   
   return (
      <div className={post.posts__item}>
         <div className={post.posts__image}>

         </div>
         <div className={post.posts__item_text}>
            {props.text}
         </div>
         <div className={post.posts__item_likes}>
            Likes: {props.likes}
         </div>
      </div>
   )
}

export default Post;