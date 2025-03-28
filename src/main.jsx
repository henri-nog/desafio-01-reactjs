import React from 'react'
import ReactDOM from 'react-dom/client'

const nome = "Fellipe";
const sobrenome = "Nogueira Caluête";
var num = Math.floor(Math.random() * 100);
const data_atual = new Date();
const ano = data_atual.getFullYear(); 

ReactDOM.createRoot(document.getElementById('root')).render (
   <div>
    <h1>Olá, {nome} {sobrenome}</h1>
    <h2>{`Olá, ${nome} ${sobrenome}`}</h2>
    <h3>Olá, {nome + " " + sobrenome}</h3>
    <p>Seu número da sorte é {num} e o ano atual é {ano}</p>
   </div> 
);
