import { ITarefa } from "../../../types/tarefas";
import style from "./item.module.scss";

interface Props extends ITarefa {
    pegaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    pegaTarefa,
}: Props) {
    return (
        <li
            className={`${style.item} ${
                selecionado ? style.itemSelecionado : ""
            }`}
            onClick={() =>
                pegaTarefa({ tarefa, tempo, selecionado, completado, id })
            }
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}
