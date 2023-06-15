import React, {useEffect} from 'react'
import classes from "./adminPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../axios/usersApi"

function AdminPage() {
    const dispatch = useDispatch()

    const {preloader} = useSelector(state => state.preloaderReducer)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const {users} = useSelector(state => state.userReducer)

    return (
        <div className={classes.container_content}>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>Клиентская база</h2>
                </div>
                <div className={classes.block_tarif}>
                    <div className={classes.cart_tarif}>
                        <ul className={classes.people_tarif_content}>
                            <li className={classes.li_piople_tarif}>
                                <div className={classes.block_avatar}>
                                    <ul>
                                        {
                                            preloader ?
                                                <h1>Loading......</h1>
                                                :
                                                users.map(user =>
                                                    <li>
                                                        <div><b>Логин</b> <span>{user.login}</span></div>
                                                        <div><b>Email</b> <span>{user.email}</span></div>
                                                    </li>
                                                )
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminPage