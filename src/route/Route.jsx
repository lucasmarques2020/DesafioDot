
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LisMovie from "../components/listmovie/ListMovie"
import FinishBuy from "../components/finishbuy/FinishBuy"

export default function Routs(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LisMovie/>} />
                <Route exact path="/finish" element={<FinishBuy/>} />
            </Routes>
        </BrowserRouter>
    )
}