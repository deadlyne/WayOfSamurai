import React from 'react';
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://a.ltrbxd.com/resized/sm/upload/zy/3i/3o/om/ava-2020-1200-1200-675-675-crop-000000.jpg?k=a2f346d633' />
                post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;