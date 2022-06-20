import React from "react";
import styles from "./users.module.css";
// @ts-ignore
import userPhoto from "../../assets/images/user-profile.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UserPropsType = {
    user: UserType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: boolean
}

const User = (props: UserPropsType) => {
    return (
        <div key={props.user.id}>
            <table className={styles.table}>
                <tbody>
                <tr className={styles.tr}>
                    <td className={styles.photo}>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                                <img alt={'missing userPhoto'} className={styles.userPhoto}
                                     src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {props.user.followed
                                ? <button disabled={props.followingInProgress} className={styles.button}
                                          onClick={() => {
                                              props.unfollow(props.user.id)
                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress} className={styles.button}
                                          onClick={() => {
                                              props.follow(props.user.id)
                                          }}>Follow</button>}
                        </div>
                    </td>
                    <td className={styles.name}>
                        <div>
                            <div className={styles.marginBottom}>{props.user.name}</div>
                            <div className={styles.status}>{props.user.status}</div>
                        </div>
                        <div>
                            <div className={styles.marginBottom}>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User