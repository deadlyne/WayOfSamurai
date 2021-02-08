import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://pixnio.com/free-images/2018/12/08/2018-12-08-16-25-38.jpg' width={1000} height={500}/>
            </div>
            <div className={s.descripsionBlock}>
                Ava + descripsion
            </div>
        </div>);
}

export default ProfileInfo;