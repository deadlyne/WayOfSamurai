import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://pixnio.com/free-images/2018/12/08/2018-12-08-16-25-38.jpg' />
        </div>
        <div>
            Ava + descripsion
        </div>
        <div>My posts
          <div>
                New post
          </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                 </div>
                <div className={s.item}>
                 post 2
                </div>
            </div>
        </div>
        </div>;
}

export default Profile;