<br />
<h1 align="center"> Gerenciador de Tarefas </h1>
<h4 align="center">Plataforma de Gerenciamento de Tarefas onde você pode fazer sua lista de tarefas do dia e ter auxilio de um cronometro para controlar o tempo de cada atividade</h4>
<br />

<div id="statusProject" align="center">
<img src="https://img.shields.io/github/license/franklindrw/gerenciador-de-tarefas.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/stars/franklindrw/gerenciador-de-tarefas.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/forks/franklindrw/gerenciador-de-tarefas.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/franklindrw/gerenciador-de-tarefas.svg?style=for-the-badge" />
<img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=green&style=for-the-badge"/>
</div>

<br /><br />

## 🧭 Índice
* [Sobre o Projeto](#-sobre-o-projeto)
  * [UseStade e Props](#usestade-e-props)
  * [Linguagens Usadas](#-construido-com)
* [Instalação](#-instalação)
  * [Requisitos](#requisitos)
  * [Instalar a aplicação Web](#instalar-a-aplicação-web)
* [Como usar](%EF%B8%8F-como-usar)
* [Autor](#-autor)
* [Licença](#-licença)

<br /><br />

## 🔎 Sobre o Projeto

plataforma de Gerenciamento de Tarefas onde você pode fazer sua lista de tarefas do dia e ter auxilio de um cronometro para controlar o tempo de cada atividade.

Com essa aplicação consegui por em prática os conhecimentos aprendidos, onde fui capaz de aprender como criar um projeto do zero com React e Typescript e como ele funciona por debaixo dos panos.

Também criei componentes com class-component e function component, como usar SCSS e o CSS-Modules que ajuda a não ter sobreposição de classes. Sem contar a comunicação entre componentes com props e como funciona o State para renderizar o componente para sempre atualizar de forma dinamica.

<br /><br />

### UseStade e Props

Como o React não é Reativo e sim Declarativo, foi utilizado a função UseStade para atualizar de forma dinamica a lista assim que é adicionado uma nova tarefa pelo formulário, e então é feita a comunicação de dados pelos componentes usando Props.

<br />
<div align="center" width="600px">
<img src="https://user-images.githubusercontent.com/81038899/159989735-ea53c548-58c0-474a-a05c-aa323e4c8ba0.gif" />
</div>
<br />

Pelo props foi possível montar a comunicação através do componente "pai" para que os outros componentes consigam receber e enviar dados, como por exemplo o cronometro. Assim que a tarefa é selecionada é enviado o tempo e convertido para segundos pelo componente, e quando o cronometro é zerado ele retorna para lista que a tarefa está completa, e a lista atualiza o componente novamente.  

Tudo isso de forma dinamica sem que o Javascript precise recarregar a página já que o React atualiza os componentes de forma individual e dinâmica.

<br />
<div align="center" width="600px">
<img src="https://user-images.githubusercontent.com/81038899/159991101-ed41fd06-0312-4c28-aafa-399c03a7df33.gif" />
</div>
<br />


<br /><br />

### 🔨 Construido com
<div id="statusProject" align="left">
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</div>

<br /><br />

## 📥 Instalação
#### É possível usar a aplicação através do link: https://gerenciador-de-tarefas-chi.vercel.app

### Requisitos
Para instalar essa aplicação na máquina é preciso ter instalado o Node.js

saiba mais em https://nodejs.org/en/download/

### Instalar a aplicação Web
1. Clone o repositório na sua Máquina

2. Navegue até a pasta clonada

3. Abra o painel de comandos dentro da pasta e rode a instalação de dependencias do Node com npm
```
npm install
```

4. Após a instalação das dependências, rode o comando abaixo para iniciar o servidor React
```
npm start
```

<br /><br />


## ▶️ Como usar

 1. Para adicionar na lista de tarefas, preencha o formulário com a atividade e o tempo (no máximo 1:30:00)
 
 2. Depois selecione a tarefa que deseja iniciar o cronometro
 
 3. Clique em começar para iniciar a contagem
 
 4. Assim que o tempo é zerado automáticamente a aplicação marca como concluída
 
 5. Após a conclusão não pode selecionar a tarefa novamente, somente criando outra 

<br /><br />

### 🖊 Autor

<a href="https://github.com/franklindrw">
<img style="border-radius: 50%; width: 100px" src="https://github.com/franklindrw.png" alt="Foto do Autor"/>
<br />
<sub><b>Franklin Campos</b></sub>
</a>
</br>
<p>Feito por <strong>Franklin Campos</strong> 👋🏻 </br>
Entre em contato!</p>

<div>
<a href="https://www.linkedin.com/in/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="mailto:franklindrw@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.instagram.com/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>

<br /><br />

### 📋 Licença

<p> Copyright 2022 © Franklin Campos </br>
This project is MIT licensed.</p>
