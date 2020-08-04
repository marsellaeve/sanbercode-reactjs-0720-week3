import React from 'react';
let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]
class DaftarHargaBuah extends React.Component{
    render(){
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
                    </tr>
            {
                dataHargaBuah.map(el=>{
                    return(
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat/1000+' kg'}</td>
                        </tr>
                    )
                })
            }
            </table>
            </div>
        )
    }
}
export default DaftarHargaBuah;