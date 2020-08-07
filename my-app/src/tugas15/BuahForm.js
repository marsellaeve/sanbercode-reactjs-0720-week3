import React, { useState, useContext } from 'react';
import axios from 'axios';
import {BuahContext} from "./BuahContext"
import {IDContext} from "./IDContext"

const BuahForm = ()=>{
    const[dataHargaBuah,setDataHargaBuah] = useContext(BuahContext)
    const[inputNama,setInputNama]=useState("")
    const[inputHarga,setInputHarga]=useState("")
    const[inputBerat,setInputBerat]=useState("")
    const[ID,setID]=useContext(IDContext)
    const[selectedId,setSelectedId]=useState(0)
    const[statusForm, setStatusForm]=useState("create")
    
    const edited=()=>{
        let idBuah= ID.id;
        let buah = dataHargaBuah.find(x=>x.id===idBuah)
        console.log(buah)
        setInputNama(buah.nama)
        setInputHarga(buah.harga)
        setInputBerat(buah.berat)
        setSelectedId(idBuah)
        setStatusForm("edit")
        setID({aksi:"kosong"})
    }
    const deleted=()=>{
        let idBuah= ID.id;
        let newDataBuah = dataHargaBuah.filter(el=>el.id!==idBuah)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            console.log(res);
        })
        setDataHargaBuah([...newDataBuah]);
        setID({aksi:"kosong",id: 1});
    }
    if(ID.aksi==="edit"){
        edited(ID.id);  
    }
    else if(ID.aksi==="delete"){
        deleted(ID.id);
    }
    
    const handleChange1=(event)=>{
        setInputNama(event.target.value);
    }
    const handleChange2=(event)=>{
        setInputHarga(event.target.value);
    }
    const handleChange3=(event)=>{
        setInputBerat(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(inputNama.replace(/\s/g,'')!==""&&inputHarga!==""&&inputBerat!==""){
            let daftarBuah=dataHargaBuah
            if(statusForm==="create"){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`,{inputNama, inputHarga, inputBerat})
                .then(res => {
                    setDataHargaBuah([...daftarBuah,{id:res.data.id, nama: inputNama, harga: inputHarga, berat: inputBerat}])
                })
            }
            else if(statusForm==="edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {inputNama,inputHarga,inputBerat})
                .then(res => {
                    let dataBuah = dataHargaBuah.find(el=> el.id === selectedId)
                    dataBuah.nama = inputNama
                    dataBuah.harga = inputHarga
                    dataBuah.berat = inputBerat
                    setDataHargaBuah([...dataHargaBuah])
                })
            }
            setStatusForm("create")
            setSelectedId(0)
            setInputNama("")
            setInputHarga("")
            setInputBerat("")
        }
    }
    return(
        <div>
            <style>
                {`
                div{
                    padding-left:2px;
                    font-family:serif;
                }
                form{
                    text-align:center;
                }
                h1{text-align:center;}`}
            </style>
        {/* Form */}
            <h1>Form Data Buah</h1>
        <form onSubmit={handleSubmit}>
            <label>Masukkan nama buah : </label>          
            <input type="text" value={inputNama} onChange={handleChange1}/><br></br><br></br>
            <label>Masukkan harga buah : </label>          
            <input type="text" value={inputHarga} onChange={handleChange2}/><br></br><br></br>
            <label>Masukkan nama berat : </label>          
            <input type="text" value={inputBerat} onChange={handleChange3}/><br></br><br></br>
            <button>submit</button>
        </form>
        </div>
    )
}
export default BuahForm;