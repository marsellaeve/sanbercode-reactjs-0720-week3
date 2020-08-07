import React,{useState, createContext} from "react";
export const IDContext = createContext();
export const IDProvider = props =>{
    const[ID,setID]=useState({aksi:"kosong",id:1})
    return(
        <IDContext.Provider value={[ID,setID]}>
            {props.children}
        </IDContext.Provider>
    )
}