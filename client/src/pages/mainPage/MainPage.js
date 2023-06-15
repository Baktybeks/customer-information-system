import React from 'react'
import Banner from "../../components/banner/Banner"
import Tariff from "../../components/tariff/Tariff"
import Check from "../../components/check/Check"
import About from "../../components/about/About"
function MainPage() {

    return (
        <div>
            <Banner/>
            <Tariff/>
            <Check/>
            <About/>
        </div>
    )
}

export default MainPage