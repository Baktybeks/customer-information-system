import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import TariffItem from "../../components/tariffItem/TariffItem"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getUserTariffApi} from "../../axios/tariffApi"

function UserPage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {userTariffs} = useSelector(state => state.tariffReducer)

    useEffect(() => {
        dispatch(getUserTariffApi(id))
    }, [dispatch, id])


    return (
        <div className={classes.container_content}>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>ваши тарифы</h2>
                </div>
                <div className={classes.block_tarif}>
                    <div className={classes.nav_tarif}>
                        <ul className={classes.nav_tarif_link}>
                            <li>Интернет</li>
                        </ul>
                    </div>
                    <div className={classes.cart_tarif}>
                        <ul className={classes.cart_tarif_content}>
                            {
                                userTariffs.map(userTariff => <TariffItem key={userTariff.id} tariff={userTariff.tariff}/>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserPage