import React, { useState } from "react";
import { Formulario } from "../../components/formulario";
import Lista from "../../components/lista";
import { ITarefa } from "../../types/tarefas";
import Cronometro from "../cronometro";
import style from "./App.module.scss";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function pegaTarefa(tarefaSelecionada: ITarefa) {
        setSelecionado(tarefaSelecionada);
        setTarefas((tarefasAnteriores) =>
            tarefasAnteriores.map((tarefa) => ({
                ...tarefa,
                selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
            }))
        );
    }

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista tarefas={tarefas} pegaTarefa={pegaTarefa} />
            <Cronometro selecionado={selecionado} />
        </div>
    );
}

export default App;
