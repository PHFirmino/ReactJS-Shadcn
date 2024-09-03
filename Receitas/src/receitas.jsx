import * as React from "react"
import { useEffect, useState } from "react";


import Adicionar from "./adicionar";
import Procurar  from "./procurar";
import Cards from "./card";


export default function Receitas(){

    const [receitas, setReceitas] = useState([])
    const [selected, setSelected] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [qntReceitas, setQntReceitas] = useState();

    function carregarReceitas(){
        fetch('http://localhost:8000/pratos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data =>{
            setReceitas(data)
            setQntReceitas(data.length)
            console.log(data.length)
        })
        .catch(error => console.error(error))
    }

    function carregarTodosTipos(){
        fetch('http://localhost:8000/tipos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTipos(data)
        })
        .catch(error => console.log(error))
    }

    
    function carregarTipos(index){
        fetch(`http://localhost:8000/pratos/${index}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.tipo)
            setSelected(data.tipo)
        })
    }

    function atualizarLista(){
        carregarReceitas()
    }

    function filtrar(item){
        if(item == ""){
            atualizarLista()
        }
        setReceitas(receitas.filter(receita => receita.nome === item))
    }


    useEffect(() => {
        carregarReceitas()
        carregarTodosTipos()
    }, [])

    return(
        <>
            <div className="flex flex-wrap container m-5 ml-12 justify-between">
                <Adicionar tipo={tipos} qntReceitas={qntReceitas} atualizarLista={atualizarLista} setQntReceitas={setQntReceitas}/>
                <Procurar filtrar={filtrar}/>
            </div>
            <div className="flex flex-wrap container mx-auto">
            {
                receitas.map((receita) =>
                    <Cards receita={receita} carregarTipos={carregarTipos} tipo={tipos} selected={selected} setSelected={setSelected} qntReceitas={qntReceitas} atualizarLista={atualizarLista}/>
                )
            }
            </div>
        </>
    )
}