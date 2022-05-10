import React from "react";
import styles from "./users.module.css";
// @ts-ignore
import userPhoto from "../../assets/images/user-profile.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number
    currentPage: number
    totalUsersCount: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (followingInProgress: boolean) => void
    followingInProgress: boolean
}


const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            {/*show only 6 pages from server*/}
            <div className={styles.pages}>
                {pages.reduce((acc, p, index) => {
                    if (index > 5) return acc
                    acc.push(<span className={`${props.currentPage === p && styles.selectedPage} ${styles.span}`}
                                   onClick={() => {
                                       props.onPageChanged(p)
                                   }}>{p}
                </span>)
                    return acc
                }, [] as JSX.Element[])}
            </div>


            {
                props.users.map(u => <div key={u.id}>
                    <table className={styles.table}>
                        <tbody>
                        <tr className={styles.tr}>
                            <td className={styles.photo}>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img alt={'missing userPhoto'} className={styles.userPhoto}
                                             src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress} className={styles.button} onClick={() => {
                                            props.toggleFollowingProgress(true)
                                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            //     withCredentials: true,
                                            //     headers: {
                                            //         'API-KEY': '777d961a-f9a7-4dc0-b651-7f2e8df99fbe'
                                            //     }
                                            // })
                                            usersAPI.unfollow(u.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false)
                                            })

                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress} className={styles.button} onClick={() => {
                                            props.toggleFollowingProgress(true)
                                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            //     withCredentials: true,
                                            //     headers: {
                                            //         'API-KEY': '777d961a-f9a7-4dc0-b651-7f2e8df99fbe'
                                            //     }
                                            // })
                                            usersAPI.follow(u.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false)
                                            })

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
                        </tbody>
                    </table>
                </div>
                )
                }
                </div>
                )

                }

                export default Users