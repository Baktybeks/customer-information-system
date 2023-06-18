import React, {useState} from 'react'
import classes from "./addTariff.module.css"
import {useDispatch} from "react-redux"
import {addTariffApi} from "../../../axios/tariffApi"

function AddTariff() {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [speed, setSpeed] = useState('')
    const [price, setPrice] = useState('')

    const isFormValid = () => title && description && speed && price

    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('speed', speed)
        formData.append('price', price)
        dispatch(addTariffApi(formData))
    }

    const reset = () => {
        setTitle('')
        setDescription('')
        setSpeed('')
        setPrice('')
    }


    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Добавление  тарифа
                    </h2>
                </div>
                <form
                    onSubmit={submitHandler}
                    className={classes.one_block}>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Название тарифа"/>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Описание"/>
                    <input
                        type="number"
                        name="speed"
                        value={speed}
                        onChange={e => setSpeed(e.target.value)}
                        placeholder="Скорость тариффа"/>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="цена"/>
                    <button
                        className={classes.btn_send}
                        type="submit">
                        <span>Отправить</span>
                    </button>
                    <button className={classes.btn_send}
                            onClick={reset}
                    >
                        Сбросить
                    </button>
                </form>
            </section>
        </div>
    )
}

export default AddTariff