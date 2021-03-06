import React, { useEffect, useState} from 'react';
import Table from "../../components/table";
import api from "../../config/service";

export default function Produtos() {

    const [lista, setLista] = useState([])

    useEffect(() => {
        async function axios(){
            await api.get('/produtos')
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
        name: "Descrição", align: "center"}, {
        name: "Quantidade", align: "center"}, {
        name: "Valor", align: "center"}, {
        name: "Estoque", align: "center"}, {
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
