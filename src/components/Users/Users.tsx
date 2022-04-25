import React from 'react'
import {UserType} from "../../redux/users-reducer";
// @ts-ignore
import userPhoto from "../../assets/images/user-profile.png"
import styles from "./users.module.css";
import axios from "axios";
import {MapDispatchPropsType} from "./UsersContainer";

type PropsType = {
    users: Array<UserType>
}


class Users extends React.Component<PropsType & MapDispatchPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                            <table className={styles.table}>
                                <tr className={styles.tr}>
                                    <td className={styles.photo}>
                                        <div>
                                            <img alt={'missing photo'} className={styles.userPhoto}
                                                 src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                        </div>
                                        <div>
                                            {u.followed
                                                ? <button className={styles.button} onClick={() => {
                                                    this.props.unfollow(u.id)
                                                }}>Unfollow</button>
                                                : <button className={styles.button} onClick={() => {
                                                    this.props.follow(u.id)
                                                }}>Follow</button>}

                                        </div>
                                    </td>
                                    <td className={styles.name}>
                                        <div>
                                            <div className={styles.marginBottom}>{u.name}</div>
                                            <div className={styles.status}>{u.status}</div>
                                        </div>
                                        <div>
                                            <div className={styles.marginBottom}>{'u.location.country'}</div>
                                            <div>{'u.location.city'}</div>
                                        </div>


                                    </td>
                                </tr>
                            </table>

                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users