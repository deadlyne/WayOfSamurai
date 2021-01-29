import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://a.ltrbxd.com/resized/sm/upload/zy/3i/3o/om/ava-2020-1200-1200-675-675-crop-000000.jpg?k=a2f346d633' />
                { props.message }
            <div>
                <span>like {(Math.floor (Math.random ()*100))}
                </span>
            </div>
        </div>
    )
}

export default Post;