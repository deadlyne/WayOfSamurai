import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {
    return <div>My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>remove</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are you?' />
            <Post message='It is my first post'/>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>;
}

export default MyPosts;