import React from 'react';
import Table from "../../components/table";

export default function Produtos() {
    const rows = [{
        calories: 159,
        fat: 6.0,
        carbs: 444,
        teste: 4.0
    },
    {
        calories: 323,
        fat: 6.0,
        carbs: 24,
        teste: 4.0
    }
    ]  
    
    const columns = [{
        name: "teste1", align: "center"}, { 
        name: "teste2", align: "center"}, {
        name: "teste3", align: "center"}, {
        name: "teste4", align: "center"}, {
        name: "teste5", align: "center"
    }]

    return (
    <div>
        <Table 
            rows={rows}
            columns={columns}
        />
    </div>
  );
}
