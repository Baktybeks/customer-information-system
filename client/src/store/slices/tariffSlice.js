import {createSlice} from "@reduxjs/toolkit"

const tariffSlice = createSlice({
    name: 'tariffSlice',
    initialState: {
        tariffs: [],
        userTariffs: [],
        tariff: {},
    },
    reducers: {
        setUserTariffs: (state, action) => {
            state.userTariffs = action.payload
        },
        setTariffs: (state, action) => {
            state.tariffs = action.payload
        },
        setTariff: (state, action) => {
            state.tariff = action.payload
        }
    }
})

export const {
    setTariffs,
    setTariff,
    setUserTariffs

} = tariffSlice.actions

export default tariffSlice.reducer