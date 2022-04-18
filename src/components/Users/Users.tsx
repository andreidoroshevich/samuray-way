import React from 'react'
import {UserType} from "../../redux/users-reducer";
import styles from "./users.module.css"
import {MapDispatchPropsType} from "./UsersContainer";

type PropsType = {
    users: Array<UserType>
}


const Users = (props: PropsType & MapDispatchPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                userPhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                userPhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU',
                followed: false,
                fullName: 'Andrey',
                status: 'I am cool',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                userPhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU',
                followed: false,
                fullName: 'Maxim',
                status: 'Life is good',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                userPhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU',
                followed: true,
                fullName: 'Vadim',
                status: 'The best of the best',
                location: {city: 'Boston', country: 'US'}
            },
            {
                id: 5,
                userPhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU',
                followed: true,
                fullName: 'Sasha',
                status: 'Life is pain',
                location: {city: 'London', country: 'GB'}
            },
        ])
    }


    return (
        <div>
            {

                props.users.map(u => <div key={u.id}>
                        <table className={styles.table}>
                            <tr className={styles.tr}>
                                <td className={styles.photo}>
                                    <div>
                                        <img className={styles.userPhoto} src={u.userPhotoUrl}/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button className={styles.button} onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button className={styles.button} onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>}

                                    </div>
                                </td>
                                <td className={styles.name}>
                                    <div>
                                        <div className={styles.marginBottom}>{u.fullName}</div>
                                        <div className={styles.status}>{u.status}</div>
                                    </div>
                                    <div>
                                        <div className={styles.marginBottom}>{u.location.country}</div>
                                        <div>{u.location.city}</div>
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

export default Users