import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";


export default function Adicionar(props){
    const [nomeNovaReceita, setNomeNovaReceita] = useState("");
    const [tipoNovaReceita, setTipoNovaReceita] = useState([]);
    const [descricaoNovaReceita, setDescricaoNovaReceita] = useState("");
    const [minutosNovaReceita, setMinutosNovaReceita] = useState();
    const [beneficiosNovaReceita, setBeneficiosNovaReceita] = useState("");


    function adicionar(){
        fetch('http://localhost:8000/pratos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : `${props.qntReceitas}`,
                nome: nomeNovaReceita,
                img : "",
                descricao : descricaoNovaReceita,
                tipo : tipoNovaReceita,
                tempo_preparo : minutosNovaReceita,
                beneficios_destaques : beneficiosNovaReceita
            })
        })
        .then(response => {
            if (response.ok) {
                props.atualizarLista()
            }
        })
        .catch(error => console.error(error))
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild> 
                <Button className="w-52 ml-3">Adicionar receita</Button>
                </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Adicionar receita</DialogTitle>
                        <DialogDescription>
                            Faça a crição da receita. Clique em salvar quando terminar.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Nome
                                </Label>
                                <Input id="name" defaultValue={nomeNovaReceita} onChange={(e) => setNomeNovaReceita(e.target.value)} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="tipos" className="text-right">
                                Tipos
                                </Label>
                                <MultiSelect className="col-span-3 rounded-sm border border-input bg-transparent placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"  id="tipos" options={props.tipo} value={tipoNovaReceita} onChange={setTipoNovaReceita} labelledBy="Select"/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="descricao" className="text-right">
                                Descricao
                                </Label>
                                <Textarea id="descricao" defaultValue={descricaoNovaReceita} onChange={(e) => setDescricaoNovaReceita(e.target.value)} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="minutos" className="text-right">
                                Minutos
                                </Label>
                                <Input id="minutos" type="number" defaultValue={minutosNovaReceita} onChange={(e) => setMinutosNovaReceita(e.target.value)} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="beneficios" className="text-right">
                                Benefícios
                                </Label>
                                <Textarea id="beneficios" placeholder="Digite benefícios" defaultValue={beneficiosNovaReceita} onChange={(e) => setBeneficiosNovaReceita(e.target.value)} className="col-span-3"/>
                            </div>
                        </div>
                        <DialogFooter>
                        <Button onClick={adicionar}>Salvar</Button>
                        </DialogFooter>
                    </DialogContent>
            </Dialog>
        </>
    )
}