import { ITarefa } from "../../types/tarefas";
import Item from "./item";
import style from "./lista.module.scss";

export default function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    );
}
