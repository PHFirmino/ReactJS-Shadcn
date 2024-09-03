import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


import { Clock } from "lucide-react";
import { Smile } from "lucide-react";
import Excluir from "./excluir";
import Editar from "./editar";

export default function Cards(props){
    return (
        <>
            <Card className="w-96 m-5" key={props.receita.id}>
                <CardHeader>
                    <div className="flex mb-5">
                    <Avatar>
                        <AvatarImage src={props.receita.img} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mx-3 mt-3">{props.receita.nome}</CardTitle>
                    </div>
                    <CardDescription>{props.receita.descricao}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap">
                    {props.receita.tipo.map((tipo) => 
                        <Badge className="mr-2 mb-2" key={tipo.label} variant="outline">{tipo.label}</Badge>
                    )}
                </CardContent>
                <CardContent className="flex">
                    <Clock className="w-4"></Clock>
                    <p className="ml-2 text-sm mt-0.5">{props.receita.tempo_preparo} Minutos</p>
                </CardContent>
                <CardFooter>
                    <Smile className="w-5"></Smile>
                    <p className="text-sm ml-2">{props.receita.beneficios_destaques}</p>
                </CardFooter>
                <CardFooter className="flex flex-wrap justify-between">
                        <Editar receita={props.receita} carregarTipos={props.carregarTipos} tipo={props.tipo} selected={props.selected} setSelected={props.setSelected} atualizarLista={props.atualizarLista} qntReceitas={props.qntReceitas}/>
                        <Excluir id={props.receita.id} atualizarLista={props.atualizarLista}/>
                </CardFooter>
            </Card>
        </>
    )
}