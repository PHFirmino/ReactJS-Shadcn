import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

import { Search } from 'lucide-react';

export default function Procurar(props){

    const [filtro, setFiltro] = useState("")

    function filtrar(){
        props.filtrar(filtro)
    }
    return (
        <>
            <div className="flex w-1/2 mr-10">
                <Input className="w-full" type="email" value={filtro} onChange={(e) => setFiltro(e.target.value)} placeholder="Nome" />
                <Button className="ml-2" onClick={filtrar}><Search></Search></Button>
            </div>
        </>
    )
}