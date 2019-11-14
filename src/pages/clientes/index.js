import React, { useEffect, useState} from 'react';
import Table from "../../components/table";
import api from "../../config/service";

export default function Clientes() {

    const [lista, setLista] = useState([])

    useEffect(() => {
        async function axios(){
            await api.get('/clientes')
            .then((result) => {
                setLista(result.data)

            }).catch((err) => {
                console.log(err);
                 
            });    
        }

        axios()

    }, [])
   
    const columns = [{
        name: "Código", align: "center"}, { 
        name: "Nome", align: "center"}, {
        name: "CPF/CNPJ", align: "center"}, {
        name: "Telefone", align: "center"}, {
        name: "Ações", align: "center"
    }]

    return (
    <div>
        <Table 
            rows={lista}
            columns={columns}
        />
    </div>
  );
}
