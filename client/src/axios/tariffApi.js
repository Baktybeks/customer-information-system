import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setTariff, setTariffs, setUserTariffs} from "../store/slices/tariffSlice"
import {preloader} from "../store/slices/preloaderSlice"

export const getTariffsApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/tariff/`)
            dispatch(setTariffs(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getTariffApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/tariff/${id}`)
            dispatch(setTariff(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getUserTariffApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_tariff/user/${id}`)
            dispatch(setUserTariffs(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addTariff = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/tariff/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}
export const addUserTariff = (status="TRUE", tariffId, userId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/user_tariff/', {status, tariffId, userId})
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

