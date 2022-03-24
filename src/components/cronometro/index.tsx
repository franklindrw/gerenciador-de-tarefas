import { Button } from "../button";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined;
    finalizarTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha uma tarefa e inicie o cronômetro
            </p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Button texto="Começar" onClick={() => regressiva(tempo)} />
        </div>
    );
}
