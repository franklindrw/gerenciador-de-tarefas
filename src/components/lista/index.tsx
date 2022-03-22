import React from "react";
import Item from "./item";
import style from "./lista.module.scss";

export default function Lista() {
    const tarefas = [
        {
            tarefa: "Estudar React",
            tempo: "02:00:00",
        },
        {
            tarefa: "Estudar Javascript",
            tempo: "01:00:00",
        },
        {
            tarefa: "Estudo Bíblico",
            tempo: "03:40:00",
        },
        {
            tarefa: "Estudar TypeScript",
            tempo: "02:00:00",
        },
    ];

    return (
        <aside className={style.listaTarefas}>
            <h2> Tarefas do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
                ))}
            </ul>
        </aside>
    );
}
