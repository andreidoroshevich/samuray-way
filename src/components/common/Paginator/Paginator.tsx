import React from "react";
import styles from "../../Users/users.module.css";
// @ts-ignore
import userPhoto from "../../../assets/images/user-profile.png";

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

    return (
        <div>
            <div className={styles.pages}>
                {pages.reduce((acc, p, index) => {
                    if (index > 20) return acc
                    acc.push(<span className={`${props.currentPage === p && styles.selectedPage} ${styles.span}`}
                                   onClick={() => {
                                       props.onPageChanged(p)
                                   }}>{p}
                </span>)
                    return acc
                }, [] as JSX.Element[])}
            </div>
        </div>
    )

}

export default Paginator