import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = () => {
    return (
        <>
            <div>
                <img src='https://www.encyclopedie-environnement.org/app/uploads/2020/11/couv_nature.jpg' alt='Logo'/>
            </div>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;