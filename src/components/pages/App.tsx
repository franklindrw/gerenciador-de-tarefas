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

    function finalizarTarefa() {
        if (selecionado) {
            setSelecionado(undefined);
            setTarefas((tarefasAnteriores) =>
                tarefasAnteriores.map((tarefa) => {
                    if (tarefa.id === selecionado.id) {
                        return {
                            ...tarefa,
                            selecionado: false,
                            completado: true,
                        };
                    }
                    return tarefa;
                })
            );
        }
    }

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista tarefas={tarefas} pegaTarefa={pegaTarefa} />
            <Cronometro
                selecionado={selecionado}
                finalizarTarefa={finalizarTarefa}
            />
        </div>
    );
}

export default App;
