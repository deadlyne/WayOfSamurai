import React from 'react';
import s from './Profile.module.css';
import MyPosts from './My posts/MyPosts';



const Profile = () => {
    return (<div className= {s.profile}>
        <div>
            <img src='https://pixnio.com/free-images/2018/12/08/2018-12-08-16-25-38.jpg' width={1000} height={500}/>
        </div>
        <div>
            Ava + descripsion
        </div>
        <MyPosts />
        </div>);
}

export default Profile;