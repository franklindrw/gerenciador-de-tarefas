import { Button } from "../button";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha uma tarefa e inicie o cronômetro
            </p>

            <div className={style.relogioWrapper}>
                <Relogio />
            </div>

            <Button texto="Começar" />
        </div>
    );
}
