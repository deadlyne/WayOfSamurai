import React from 'react';
import s from './Profile.module.css';
import MyPosts from './My posts/MyPosts';


const Profile = () => {
    return <div>
        <div>
            <img src='https://pixnio.com/free-images/2018/12/08/2018-12-08-16-25-38.jpg' />
        </div>
        <div>
            Ava + descripsion
        </div>
        <MyPosts />
        </div>;
}

export default Profile;