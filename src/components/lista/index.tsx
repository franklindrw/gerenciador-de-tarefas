import { ITarefa } from "../../types/tarefas";
import Item from "./item";
import style from "./lista.module.scss";

interface Props {
    tarefas: ITarefa[];
    pegaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Lista({ tarefas, pegaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item pegaTarefa={pegaTarefa} key={item.id} {...item} />
                ))}
            </ul>
        </aside>
    );
}
