import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/posts-reducer";



class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })

    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        );

    }
};

let mapStateToProps = (state:RootState) =>({
    profile:state.posts.profile
})

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);