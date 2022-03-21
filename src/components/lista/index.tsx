import React from "react";
import "./style.scss";

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
        <aside className="listaTarefas">
            <h2> Tarefas do dia </h2>
            <ul>
                {tarefas.map((tarefas, index) => (
                    <li key={index} className="item">
                        <h3>{tarefas.tarefa}</h3>
                        <span>{tarefas.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
