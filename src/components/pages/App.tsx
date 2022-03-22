import React from "react";
import { Formulario } from "../../components/formulario";
import Lista from "../../components/lista";
import Cronometro from "../cronometro";
import style from "./App.module.scss";

function App() {
    return (
        <div className={style.AppStyle}>
            <Formulario />
            <Lista />
            <Cronometro />
        </div>
    );
}

export default App;
