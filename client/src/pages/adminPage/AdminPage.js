import React, {useEffect} from 'react'
import classes from "./adminPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../axios/usersApi"
import AddTariff from "../../components/add/addTariff/AddTariff"

function AdminPage() {
    const dispatch = useDispatch()

    const {preloader} = useSelector(state => state.preloaderReducer)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const {users} = useSelector(state => state.userReducer)

    return (
        <div className={classes.container_content}>
            <AddTariff/>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>Клиентская база</h2>
                </div>
                <div className={classes.block_tarif}>
                    <div className={classes.cart_tarif}>
                        <ul className={classes.people_tarif_content}>
                            <li className={classes.li_piople_tarif}>
                                <div className={classes.block_avatar}>
                                    {
                                        preloader ?
                                            <h1>Loading......</h1>
                                            :
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Логин</th>
                                                    <th>Email</th>
                                                    <th>Role</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {users.map(item => (
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.login}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.role}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                    }

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