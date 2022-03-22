import React from "react";
import { Button } from "../button";
import style from "./formulario.module.scss";

export class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione uma nova Tarefa</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Tarefa..."
                        required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="Tempo">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>

                <Button />
            </form>
        );
    }
}
