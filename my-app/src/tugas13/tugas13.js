import React from 'react';
class DaftarHargaBuah extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            indexOfForm: -1
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleEdit(event){
        let index= event.target.value;
        let buah= this.state.dataHargaBuah[index];
        console.log(buah);
        this.setState({
            inputNama: buah.nama, inputHarga: buah.harga, inputBerat: buah.berat, indexOfForm: index
        });
    }
    handleDelete(event){
        let index= event.target.value;
        let buah= this.state.dataHargaBuah;
        let editedBuah = buah[this.state.indexOfForm];
        console.log(editedBuah);
        buah.splice(index,1);
        if(editedBuah!== undefined){
            var newindex= buah.findIndex((el)=>el===editedBuah);
            console.log(newindex);
            this.setState({
                dataHargaBuah: buah,
                indexOfForm: newindex
            });
        }
        else{
            this.setState({
                dataHargaBuah: buah
            });
        }
    }
    handleChange1(event){
        this.setState({inputNama: event.target.value});
    }
    handleChange2(event){
        this.setState({inputHarga: event.target.value});
    }
    handleChange3(event){
        this.setState({inputBerat: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.state.inputNama.replace(/\s/g,'')!==""&&this.state.inputHarga!==""&&this.state.inputBerat!==""){
            let daftarBuah=this.state.dataHargaBuah
            if(this.state.indexOfForm===-1){
                daftarBuah=[...daftarBuah,{nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat}]
            }
            else{
                daftarBuah[this.state.indexOfForm]= {nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat}
            }
            console.log(daftarBuah)
            this.setState({
              dataHargaBuah: daftarBuah,
              inputNama: "",
              inputHarga: "",
              inputBerat: "",
              indexOfForm: -1
            })
        }
    }
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
                    form{
                        text-align:center;
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
                this.state.dataHargaBuah.map((el,index)=>{
                    return(
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat/1000+' kg'}</td>
                            <td>
                                <button onClick={this.handleEdit} value={index}>Edit</button>
                                &nbsp;
                                <button onClick={this.handleDelete} value={index}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
            </table>
            {/* Form */}
                <h1>Form Data Buah</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Masukkan nama buah : </label>          
                <input type="text" value={this.state.inputNama} onChange={this.handleChange1}/><br></br><br></br>
                <label>Masukkan harga buah : </label>          
                <input type="text" value={this.state.inputHarga} onChange={this.handleChange2}/><br></br><br></br>
                <label>Masukkan nama berat : </label>          
                <input type="text" value={this.state.inputBerat} onChange={this.handleChange3}/><br></br><br></br>
                <button>submit</button>
            </form>
            </div>
        )
    }
}
export default DaftarHargaBuah;