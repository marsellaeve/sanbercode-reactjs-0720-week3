import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahList from "./BuahList"
import BuahForm from "./BuahForm"
import { IDProvider } from "./IDContext"

const Buah = ()=>{
    return(
        <BuahProvider>
            <IDProvider>
            <BuahList/>
            <BuahForm/>
            </IDProvider>
        </BuahProvider>
    )
}
export default Buah;