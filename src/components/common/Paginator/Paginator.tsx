import React, {useState} from "react";
import styles from "../../Users/users.module.css";
// @ts-ignore
import userPhoto from "../../../assets/images/user-profile.png";
import {v1} from "uuid";

type PaginatorPropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={styles.pages}>

            {portionNumber > 1 &&
                <button className={styles.paginatorButton} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>prev</button>
            }

            {pages.filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span key={v1()} className={`${props.currentPage === p && styles.selectedPage} ${styles.span}`}
                              onClick={() => {
                                  props.onPageChanged(p)
                              }}>{p}
                </span>
                    )

                })}

            {portionCount > portionNumber &&
                <button className={styles.paginatorButton} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>next</button>
            }
        </div>
    )
}

export default Paginator