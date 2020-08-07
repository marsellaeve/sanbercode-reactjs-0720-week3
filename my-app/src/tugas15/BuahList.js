import React,{useContext} from "react";
import {BuahContext} from "./BuahContext"
import {IDContext} from "./IDContext"
const BuahList = ()=>{
    const [ID,setID]=useContext(IDContext);
    const [buah]=useContext(BuahContext);
    const handleEdit=(event)=>{
        let idBuah= parseInt(event.target.value);
        setID({aksi:"edit",id: idBuah});
        console.log(ID);
    }
    const handleDelete=(event)=>{
        let idBuah= parseInt(event.target.value);
        setID({aksi:"delete",id: idBuah});
        console.log(ID);
    }
    return(
        <div>
        <style>
            {`
            div{
                padding-left:2px;
                font-family:serif;
            }
            table{
                border: 1px solid black;
                width: 700px;
                margin-left: auto;
                margin-right: auto;
            }
            th {
                background-color: #aaaaaa;
            }
            td {
                background-color:#ff7f50;
            }
            h1{text-align:center;}`}
        </style>
        <h1>Tabel Harga Buah</h1>
        <table>
            <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Edit</th>
            </tr>
    {
        buah!==null && buah.map((item)=>{
            return(
                <tr>
                    <td>{item.nama}</td>
                    <td>{item.harga}</td>
                    <td>{item.berat/1000+' kg'}</td>
                    <td>
                        <button onClick={handleEdit} value={item.id}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
    </table>
    </div>
    )
}
export default BuahList;