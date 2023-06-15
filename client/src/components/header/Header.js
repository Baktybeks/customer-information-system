import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getTariffsApi} from "../../axios/tariffApi"
import {setIsAuth} from "../../store/slices/userSlice"
import {getUsers} from "../../axios/usersApi"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const {tariffs} = useSelector(state => state.tariffReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getTariffsApi())
        dispatch(getUsers())
    }, [dispatch])

    return (
        <header className={classes.head}>
            <nav className={classes.nav}>
                <ul className={classes.nav_content}>
                    <li className={classes.link_nav}>
                        <Link to={links.base}>Главная</Link>
                    </li>
                    <li className={classes.link_nav}>
                        <Link to={links.contact}>Контакты</Link>
                    </li>
                    {/*<li className={classes.link_nav}>*/}
                    {/*    <Link to={links.signup}>Тарифы для дома</Link>*/}
                    {/*</li>*/}
                    {/*<li className={classes.link_nav}>*/}
                    {/*    <Link to={links.signup}>Тарифы для бизнеса</Link>*/}
                    {/*</li>*/}
                </ul>
                <ul className={classes.nav_content}>
                    {isAuth
                        ?
                        <>
                            <li className={classes.link_nav}>
                                {user.login}
                            </li>
                            <li>
                                <button
                                    className={classes.btn_nav1}
                                    onClick={userCabinet}>Кабинет</button>
                            </li>
                            {user.role === "ADMIN"
                                ?
                                <button
                                    className={classes.btn_nav1}
                                    onClick={admin}>Admin</button>
                                :
                                ''
                            }
                            <li>
                                <button
                                    className={classes.btn_nav1}
                                    onClick={logOut}>Выход</button>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link className={classes.btn_nav1} to={links.signup}>Регистрация</Link>
                            </li>
                            <li>
                                <Link className={classes.btn_nav3} to={links.login}>Вход</Link>
                            </li>
                        </>
                    }
                    <li>
                        <Link className={classes.btn_nav2} to={links.pay}>Оплатить</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header