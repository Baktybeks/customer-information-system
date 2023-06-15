import React, {useEffect} from 'react'
import classes from "./tariffPage.module.css"
import glode from "../../img/glode.png"
import clock from "../../img/clock.png"
import hands from "../../img/hands.png"
import lock from "../../img/lock.png"
import close from "../../img/close.png"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getTariffApi} from "../../axios/tariffApi"


function TariffPage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {tariff} = useSelector(state => state.tariffReducer)

    useEffect(() => {
        dispatch(getTariffApi(id))
    }, [dispatch, id])

    return (
        <div className="container">
            <div className={classes.modal_tarif}>
                <div className={classes.block_head}>
                    <h2 className={classes.head_title}>{tariff.title}</h2>
                    <img src={close} alt="close"/>
                </div>
                <div className={classes.conteiner_blocks}>
                    <div className={classes.block_infa}>
                        <div className={classes.block_infa1}>
                            <h3 className={classes.head1_infa1}>{tariff.speed} Мбит/с</h3>
                            <ul className={classes.infa_conect}>
                                <li>Быстрое-Подключение</li>
                                <li>Статический IP-адрес</li>
                            </ul>
                            <h3 className={classes.head1_infa2}>Необходимое оборудование</h3>
                            <ul className={classes.infa_conect}>
                                <li>Wi-Fi роутер</li>
                            </ul>
                        </div>
                        <div className={classes.line}></div>
                        <div className={classes.block_cash}>
                            <span className={classes.cash}><span className={classes.many}>{tariff.price}</span>som/мес</span>
                        </div>
                        <div className={classes.block_btn}>
                            <a href="../../../ALL/modalPay/index.html"><span>Подключить</span></a>
                        </div>
                    </div>
                    <div className={classes.block_infa2}>
                        <div className={classes.text_infa2}>
                            <p>
                                {tariff.description}
                            </p>
                        </div>
                        <div className={classes.bonus}>
                            <ul className={classes.spisk_bonus}>
                                <li>
                                    <img src={glode} alt="glo"/>
                                    <p>Бонус 1</p>
                                </li>
                                <li>
                                    <img src={clock} alt="clock"/>
                                    <p>Бонус 2</p>
                                </li>
                                <li>
                                    <img src={hands} alt="hend"/>
                                    <p>Бонус 3</p>
                                </li>
                                <li>
                                    <img src={lock} alt="lock"/>
                                    <p>Бонус 4</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TariffPage